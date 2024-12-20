export const apiLibraries = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const result =  await response.json()
    return result
}

export const getNestedAnimeData = async (resource, objectProperty) => {
    const response = await apiLibraries(`${resource}`)
    let result = response.data.flatMap(value => value[objectProperty])
    return result
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap
    // variable below is used to make object that have property 'data' before enter inside the data
    const response = {
        data: data.slice(first, last)
    }
    return response
}

export default apiLibraries