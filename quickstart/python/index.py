# index.py
import os
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
  hello = os.getenv("HELLO", "")
  return f"Hello {hello}"

# wsgi.py
from index import app

if __name__ == '__main__':
  app.run(debug=False)
