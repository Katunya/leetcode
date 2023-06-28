//64. auto-retry Promise on rejection


function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    return fetcher().catch((e) => {
        if( maximumRetryCount === 0) {
            throw e;
        }
        else fetchWithAutoRetry(fetcher, maximumRetryCount  -1 )
    })
}
