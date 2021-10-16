const shortUrl = require('shorten-url');

export const PRODUCTS = {
  links: [
    {
      name: 'Products',
      realUrl: '',
      url: shortUrl(
        'https://codemate.invisionapp.com/static-signed/live-embed/218014981/326033775/28/latest/RU3VB5ciKpnBhmRkjPbqh6OSDiodQWw1Mic3H7yWOERFUhWDD7mE4cz4783lduvQT8b78VlEs8iNcLB2bLKgvCQlE/Products-2x.png',
        20
      ),
    },
    {
      name: 'Choose Product Type',
      realUrl: '',
      url:
        'https://codemate.invisionapp.com/static-signed/live-embed/218014981/326033773/10/latest/qlE0iOJYORahG9vqZMppIaxxDuXHSnjJ82yFBh0fhI6b4g8IzIGiENBjEL9eumQxuhCX1h2FvlEKNC4qdO1O8rMAlE/Choose-product-type-2x.png',
    },
    {
      name: 'Add Product Form',
      realUrl: '',
      url:
        'https://codemate.invisionapp.com/static-signed/live-embed/218014981/326033771/13/latest/pBKfHRra2ORQJc2YNpdp1eMDThcTziSDT5OI9WelEIiloyQdMGc3mAwgeMdbmtZvTilEtpFoVNWBWPdetDyQjLBQlE/Add-Product-form-2x.png',
    },
    {
      name: 'Product Without Rendition',
      realUrl: '',
      url:
        'https://codemate.invisionapp.com/static-signed/live-embed/218014981/326033770/15/latest/Fgp4sA2v0EZYfLhVUWBMpPClEKHCY6kBPJuciVZoxlEAg6sriGeooYWGtMBMCXVW3aUtutwKrpLLTDLge86lrzAwlE/Product-without-rendition-2x.png',
    },
    {
      name: 'Edit Product',
      realUrl: '',
      url:
        'https://codemate.invisionapp.com/static-signed/live-embed/218014981/339484949/9/latest/jZzqVJnflEpM5On9MdGGztDhtMhj540qVm8aDPklE1F2zSZ2QxHYHctn5B6DLBBYsZByb9JDBK8RTwoiftQEuAKQlE/Edit-product-2x.png',
    },
    {
      name: 'Product With Rendition',
      realUrl: '',
      url:
        'https://codemate.invisionapp.com/static-signed/live-embed/218014981/339484948/12/latest/oDwdoDbB6XuW6lfPn1RGzrjtxHlLwjnIlqKYt5BY9I7KAPqgQIlE5PIXftdn5jTFlCYQxYEMoglEBitBitpvaQiQlE/Product-With-Rendition-2x.png',
    },
    {
      name: 'Status Notifications',
      realUrl: '',
      url:
        'https://codemate.invisionapp.com/static-signed/live-embed/218014981/343896498/2/latest/hCQsxFlWObbNt0lExYtZrE3bMCn4BPVG86910zHPcHrAEolEsvADlEHEm5O8ZsKli9JgoQ1Hjn267En7lEyQnamJVQlE/Status-notifications-2x.png',
    },
    {
      name: 'Duplicate Product',
      realUrl: '',
      url:
        'https://codemate.invisionapp.com/static-signed/live-embed/218014981/341440207/4/latest/lEr3CHglEkWxOQRPVTqgeovXOWYMlEnQJHZaiUKHZoNEt2kHiq3RlEHjLn3jKwBooSkowpWD0QhAbz0QVGrkAGQ7RwlE/Duplicate-product-2x.png',
    },
  ],
  type: 'PRODUCTS',
};

// TODO: Render Products to Image tag and Shorten URL

export default {
  PRODUCTS,
};
