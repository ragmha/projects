import app from '../server';
import supertest from 'supertest';

const request = supertest(app);

describe('GET /', () => {
  it('responds with json containing a list of all chocolate bars', async done => {
    // Sends a GET request to / endpoint
    const response = await request.get('/')
      .set('Content-type', 'application/json')


    expect(response.type).toBe('application/json');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    done();
  });
});

describe('POST /', () => {
  it('responds with json containing number of bars, packets and boxes and total costs', async done => {
    const data = {
      numberOfBars: 17,
      pricesOfBarPacketBox: [2.3, 25, 230],
      quantitiesOfBarPacketBox: [1, 12, 120],
    };

    // Sends a POST request to / endpoint
    const response = await request.post('/')
      .set('Content-type', 'application/json')
      .send(data);

    expect(response.type).toBe('application/json');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      numberOfBars: 5,
      numberOfPacks: 1,
      numberOfBoxes: 0,
      totalCost: 36.5,
    });

    done();
  });

  it('responds with error json passing null values as arguments', async done => {
    const data = {
      numberOfBars: null,
      pricesOfBarPacketBox: null,
      quantitiesOfBarPacketBox: null,
    };

    // Sends a POST request to / endpoint
    const response = await request.post('/').send(data);

    expect(response.type).toBe('application/json');
    expect(response.status).toBe(422);
    expect(response.body.errors).toHaveLength(3);
    expect(response.body.errors).toEqual([
      {
        value: null,
        msg: 'Invalid value',
        param: 'numberOfBars',
        location: 'body',
      },
      {
        value: null,
        msg: 'Invalid value',
        param: 'pricesOfBarPacketBox',
        location: 'body',
      },
      {
        value: null,
        msg: 'Invalid value',
        param: 'quantitiesOfBarPacketBox',
        location: 'body',
      },
    ]);

    done();
  });
});
