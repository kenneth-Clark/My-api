const request = require('supertest');
const { app, server } = require('./index');

describe('Color API Tests', () => {

  afterAll(() => {
    server.close();
  });
  // return hex value for red
  test('GET /color/red should return the correct color hex value for red', async () => {
    const response = await request(app).get('/color/red');
    expect(response.status).toBe(200);
    expect(response.body.hex).toBe('#FF0000');
  });
  // return hex value for green
  test('GET /color/green should return the correct color hex value for green', async () => {
    const response = await request(app).get('/color/green');
    expect(response.status).toBe(200);
    expect(response.body.hex).toBe('#00FF00');
  });
  // return hex value for blue
  test('GET /color/blue should return the correct color hex value for blue', async () => {
    const response = await request(app).get('/color/blue');
    expect(response.status).toBe(200);
    expect(response.body.hex).toBe('#0000FF');
  });
  // return hex value for yellow
  test('GET /color/yellow should return the correct color hex value for yellow', async () => {
    const response = await request(app).get('/color/yellow');
    expect(response.status).toBe(200);
    expect(response.body.hex).toBe('#FFFF00');
  });
  // return hex value for black
  test('GET /color/black should return the correct color hex value for black', async () => {
    const response = await request(app).get('/color/black');
    expect(response.status).toBe(200);
    expect(response.body.hex).toBe('#000000');
  });
  // return hex value for white
  test('GET /color/white should return the correct color hex value for white', async () => {
    const response = await request(app).get('/color/white');
    expect(response.status).toBe(200);
    expect(response.body.hex).toBe('#FFFFFF');
  });
  // return hex value for purple
  test('GET /color/purple should return the correct color hex value for purple', async () => {
    const response = await request(app).get('/color/purple');
    expect(response.status).toBe(200);
    expect(response.body.hex).toBe('#800080');
  });
  // return hex value for orange
  test('GET /color/orange should return the correct color hex value for orange', async () => {
    const response = await request(app).get('/color/orange');
    expect(response.status).toBe(200);
    expect(response.body.hex).toBe('#FFA500');
  });
  // return hex value for pink
  test('GET /color/pink should return the correct color hex value for pink', async () => {
    const response = await request(app).get('/color/pink');
    expect(response.status).toBe(200);
    expect(response.body.hex).toBe('#FFC0CB');
  });
  // return hex value for gray
  test('GET /color/gray should return the correct color hex value for gray', async () => {
    const response = await request(app).get('/color/gray');
    expect(response.status).toBe(200);
    expect(response.body.hex).toBe('#808080');
  });

  // Color not found
  test('GET /color/:name should return 404 if color is not found', async () => {
    const response = await request(app).get('/color/unknown');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Color 'unknown' not found.");
  });

  // View all the colors
  test('GET /colors should return all colors', async () => {
    const response = await request(app).get('/colors');
    expect(response.status).toBe(200);
    expect(response.body);
  });
});