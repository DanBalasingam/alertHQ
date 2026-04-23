from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "AlertHQ API, " \
    "please refer to the docs for further info on the API functionality"}

