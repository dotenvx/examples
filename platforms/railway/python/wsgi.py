# wsgi.py
from index import app

if __name__ == '__main__':
  app.run(debug=False)
