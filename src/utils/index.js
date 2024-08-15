export const replaceImageUrl = (url) => {
    return url.replace("https", "http").replace("bvtp", "benhvienthanhphovinh");
};

export const base64Image = (url) => {
    return `data:image/jpeg;base64,${url}`;
};
