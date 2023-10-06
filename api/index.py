from typing import Union

from fastapi import FastAPI

from sklearn.preprocessing import StandardScaler

from keras.models import load_model
from fastapi.encoders import jsonable_encoder


import pandas as pd
import numpy as np



# returns a compiled model
# identical to the previous one
model = load_model('model/lstmclass.h5')




import tensorflow as tf

app = FastAPI()

def preprocess(x: pd.DataFrame) -> np.ndarray:
        scaler = StandardScaler().fit(x)
        x_scaled = scaler.transform(x)
        x_train = np.reshape(x_scaled, (x_scaled.shape[0], 1, x_scaled.shape[1]))
        
        return x_train
      



@app.get("/api")
def read_root():
    df_train = pd.read_csv("dataset/pre_train.csv")
    df_train = preprocess(df_train)
    res = model.predict(df_train)
    res_rounded = np.round(res)
    res_r = res_rounded.astype(int).ravel()
    return jsonable_encoder({"Result-Rounded": jsonable_encoder(res_r.tolist()),"Probability": jsonable_encoder(res.tolist())})


@app.get("/api/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
