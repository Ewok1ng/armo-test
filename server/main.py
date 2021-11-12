import tornado.ioloop
import tornado.web
import json

PORT = 8888


data = {
    "users": [
        {"id": 1, "name": "John", "age": 35},
        {"id": 2, "name": "Bob", "age": 32},
        {"id": 3, "name": "Alex", "age": 28},
        {"id": 4, "name": "Richard", "age": 15},
        {"id": 5, "name": "Adam", "age": 26},
    ]
}


class MainHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Content-Type", 'application/json')

    def get(self):
        self.write(json.dumps(data))


def make_app():
    return tornado.web.Application([
        (r'/', MainHandler)
    ], debug=True
    )


if __name__ == '__main__':
    app = make_app()
    app.listen(PORT)
    print('Server started at http://localhost:%d' % (PORT))
    tornado.ioloop.IOLoop.current().start()
