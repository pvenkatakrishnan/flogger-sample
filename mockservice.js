var Nock = require('nock');

Nock('http://127.0.0.1:8001')
    .persist()
    .get('/activities')
    .reply(200, function (uri, requestBody) {
        return JSON.stringify([
            {
                id: 'ID1234',
                type: 'poke',
                msg: 'How are you ?'

            },
            {
                id: 'ID2345',
                type: 'checkin',
                msg: 'Visited Golden Gate Bridge!'

            },
            {
                id: 'ID5678',
                type: 'status',
                msg: 'Attending SFNode today!!'
            }
        ]);
    });