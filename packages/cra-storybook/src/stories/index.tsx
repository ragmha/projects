import React from 'react';

import apolloStorybookDecorator from 'apollo-storybook-react';
import centered from '@storybook/addon-centered';
import { setupGraphiQL } from '@storybook/addon-graphql';
import { linkTo } from '@storybook/addon-links';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '@storybook/react/demo';
import { HelloWorld, typeDefs, mocks } from '../components/HelloWorld';
import { PRODUCTS } from '../invision';

// import { Provider as ReduxProvider } from 'react-redux';
// import { Playground, store } from 'graphql-playground-react';

// export default function Provider({ story }) {
//   return <ReduxProvider store={store}>{story}</ReduxProvider>;
// }

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('with some shit', () => <Button onClick={action('clicked')}>💩</Button>);

// storiesOf('API', module)
//   .addDecorator(story => <Provider story={story()} />)
//   .add('Playground', () => (
//     <Playground endpoint="https://api.graph.cool/simple/v1/swapi" />
//   ));

storiesOf('Apollo Powered', module)
  .addDecorator(
    apolloStorybookDecorator({
      typeDefs,
      mocks,
    })
  )
  .add('Hello World', () => <HelloWorld />);

// setup the graphiql helper which can be used with the add method later
const graphiql = setupGraphiQL({ url: 'http://localhost:4000' });

storiesOf('API', module).add(
  'search first 10 products',
  graphiql(`query searchProducts($limit: Int) {
      searchProducts(limit: $limit) {
        items {
          id
          name
        }
      }
    }
  `)
);

storiesOf('UX/All', module).add('All', () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      width: '100%',
    }}
  >
    {PRODUCTS.links.map(link => (
      <div
        style={{
          width: '100%',
          marginBottom: '40px',
        }}
      >
        <div
          style={{
            paddingTop: '20px',
            paddingBottom: '10px',
            fontFamily: 'sans-serif',
            backgroundColor: 'lightblue',
            fontSize: 28,
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          {link.name}
        </div>
        <img
          style={{
            backgroundPosition: 'center',
            width: '100%',
          }}
          src={link.url}
        />
      </div>
    ))}
  </div>
));

storiesOf('UX/Products', module)
  .addDecorator(centered)
  .add('Product Main View', () => (
    <img
      style={{
        width: '100%',
      }}
      src="https://codemate.invisionapp.com/static-signed/live-embed/218014981/326033775/28/latest/RU3VB5ciKpnBhmRkjPbqh6OSDiodQWw1Mic3H7yWOERFUhWDD7mE4cz4783lduvQT8b78VlEs8iNcLB2bLKgvCQlE/Products-2x.png"
      alt="Products"
      onClick={linkTo('UX/Products', 'Choose Product Type')}
    />
  ))
  .add('Choose Product Type', () => (
    <img
      style={{
        width: '100%',
      }}
      src="https://codemate.invisionapp.com/static-signed/live-embed/218014981/326033773/10/latest/qlE0iOJYORahG9vqZMppIaxxDuXHSnjJ82yFBh0fhI6b4g8IzIGiENBjEL9eumQxuhCX1h2FvlEKNC4qdO1O8rMAlE/Choose-product-type-2x.png"
      alt="Choose Product Type"
      onClick={linkTo('UX/Products', 'Add Product Form')}
    />
  ))
  .add('Add Product Form', () => (
    <img
      style={{
        width: '100%',
      }}
      src="https://codemate.invisionapp.com/static-signed/live-embed/218014981/326033771/13/latest/pBKfHRra2ORQJc2YNpdp1eMDThcTziSDT5OI9WelEIiloyQdMGc3mAwgeMdbmtZvTilEtpFoVNWBWPdetDyQjLBQlE/Add-Product-form-2x.png"
      alt="Add Product Form"
    />
  ));
