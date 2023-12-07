from fastapi import FastAPI, File, UploadFile
from typing_extensions import Annotated
import uvicorn

app = FastAPI()


@app.post("/files/")
async def create_file(file: Annotated[bytes, File()]):
    return {"file_size": len(file)}


@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile):
    return {"filename": file.filename}


def start():
    uvicorn.run("image_converter_api.main:app", host="0.0.0.0", port=8002, reload=True)
