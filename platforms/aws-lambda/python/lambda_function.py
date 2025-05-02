# lambda_function.py
import os
from dotenvx import load_dotenvx

load_dotenvx()

def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': f'Hello {os.getenv("HELLO", "missing")}'
    }
