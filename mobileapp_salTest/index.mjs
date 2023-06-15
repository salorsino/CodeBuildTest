export const handler = async(event) => {
    console.log('yer')
    const resp = getDashboadInfo();
    return resp;
};


const getDashboadInfo = () => "Here's my dashboard info";