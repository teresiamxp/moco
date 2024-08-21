function mergeEncoding(customEncoding) {
    const defaultEncoding = {
        charset: 'utf-8',
        contentType: 'application/json',
        base64: false,
        compress: false
    };

    return { ...defaultEncoding, ...customEncoding };
}

function createRequestOptions(url, method, data, encodingOptions) {
    const headers = new Headers();
    const encoding = mergeEncoding(encodingOptions);

    headers.append('Content-Type', encoding.contentType);
    if (encoding.charset) {
        headers.append('Charset', encoding.charset);
    }

    const options = {
        method: method,
        headers: headers,
        body: JSON.stringify(data)
    };

    if (encoding.base64) {
        options.body = btoa(options.body);
    }

    if (encoding.compress) {
        // Placeholder for compression logic
        console.log('Compression is enabled (compression logic not implemented)');
    }

    return new Request(url, options);
}

// Usage example
const request = createRequestOptions(
    'https://api.example.com/data',
    'POST',
    { key: 'value' },
    { compress: true }
);

console.log(request);
