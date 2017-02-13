
# from this web site. thx a lot.
# http://qiita.com/intermezzo-fr/items/cea126c0a6e9e879f216#_reference-34a0a4457de5b9c2a3ea


from __future__ import print_function  # for py2 compatible
import tornado.ioloop
import tornado.web
import os


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        # self.write("Hello, world")
        self.render("index.html")

    def post(self):
        body = self.get_argument('body')
        len_body = len(body)
        self.render("result.html", len_body=len_body)

application = tornado.web.Application(
    [
        (r"/", MainHandler),
    ],
    template_path=os.path.join(os.getcwd(), "templates"),
    static_path=os.path.join(os.getcwd(), "../css/static"),
)

if __name__ == "__main__":
    application.listen(8000)
    print("Server is up ...")
    tornado.ioloop.IOLoop.instance().start()
