import axios from "axios";

const token=localStorage.getItem("token")

//let token="eyJraWQiOiI3MTc0NTM2OC00NDVkLTQ3NTMtYTQ0Mi04ZjE5NTNiODA2NTEiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoia2Fqb2xAMTIzNCIsImV4cCI6MTczMDA5MjQxMiwiaWF0IjoxNzMwMDkwNjEyLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0.mSs6VUL6Z-Lt98QDf9bPP0lTAgQJ3Z8Qx38bq3lU4AToYhDBTMzjLwkR5i9JDaIP6A2cjPn2Wl0P6JaVxYoQvI3vp_NWlg4vrqazRJSDyURtzS3VRkDcgkU_0GGT2FjEWDsJtOnj2LA6mMN4f4aGEZ-PhZPuZ4b40I7OS4l39y3bei9MhT-CClkm6qdU6eueE_G91TYChyY14Q7mIzIvNfvHK4clJ9dTKvWGJt5znjXsLLOdrktDnV47kpbZCi79xtTHgVvT6NfK8JWkiosFWnmPZ65QAcbF81R2Zzbp4LjZTP_bmFsKTVwWjl4tzh9xLhwGnyYv0qloTK03NaS0VA"

export const apiClient=axios.create({
    baseURL:"http://localhost:5000",
    headers:{
        "Authorization":`bearer ${token}`
    }
})


