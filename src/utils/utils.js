export const getEnv = () => window.location.href.includes('localhost') ? 'dev' : 'prod'

export const isDev = () => getEnv() === 'dev'

export const formatTokenAmount = (tokenAmount, length = 9) =>
    new Intl.NumberFormat(
        'en-US',
        {maximumSignificantDigits: length}
    ).format(Number(tokenAmount) / Math.pow(10, 18))

export const getENSTokenContractAddress = () =>
    isDev()
        ? '0xdd1e7E6B7A29FEf08ac43077E7FE48eac8e73A89'
        : '0x33071c57DE0660d61b638Fa533100Cdf94Ebd323'