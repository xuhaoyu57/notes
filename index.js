export const API = "https://daixzsefottmustefsuj.supabase.co/rest/v1/";
export const key = "sb_publishable_hygvKth7LB1Xd2Ls0FQXJw_Sr_SiZL_"; // 用 publishable key
export const img_url = "https://daixzsefottmustefsuj.supabase.co/storage/v1/object/images/";//操作图片API接口
// export const publicUrl = "https://daixzsefottmustefsuj.supabase.co/storage/v1/object/public/images/"//获取图片接口
//获取数据
export async function getData(url, params = {}) {
    const res = await fetch(API + url + '?${params.toString()}', {
        method: "GET",
        headers: {
            apikey: key,
            Authorization: `Bearer ${key}`
        },
    })
    return await res.json()
}
//添加数据
export async function postData(url, params = {}) {
    const res = await fetch(API + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": key,
            "Authorization": `Bearer ${key}`,
            "Prefer": "return=representation"
        },
        body: JSON.stringify(params)
    })
    return await res
}
//上传图片
export async function uplaodImg(file) {
    const fileName = String(Date.now()) + file.name.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9._-]/g, "")
    const url = img_url + fileName
    // return
    const res = await fetch(url, {
        method: "POST",
        headers: {
            apikey: key,
            "Authorization": `Bearer ${key}`,
            "Content-Type": file.type
        },
        body: file
    })
    if (res.status == 200) return res.url
    else return null
}

//删除图片
export async function delImg(url) {
    // const url = img_url + fileName
    const res = await fetch(url, {
        method: "DELETE",
        headers: {
            apikey: key,
            "Authorization": `Bearer ${key}`,
        },
    })
    console.log(res);
    
    if (res.status == 200) return alert('删除成功')
    else return null
}