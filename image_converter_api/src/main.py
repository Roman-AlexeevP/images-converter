from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def index() -> Dict:
    return {"greating": "hello"}
