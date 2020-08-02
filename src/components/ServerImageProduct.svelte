<script>
    import { getServerImageProductList } from '../api/ServerApi'

    let platformTypeList = ["LNX32", "LNX64", "WND32", "WND64", "UBD64", "UBS64"]

    let requestParam = {
        platformTypeCodeList: [],
        blockStorageSize: 50
    }

    let serverImageProduct = {
        productList: [],
        totalRows: 0
    }

    const getServerImageProduct = async () => {
        const response = await getServerImageProductList(requestParam)
        console.log(response)
        serverImageProduct = response
    }
</script>

{#each platformTypeList as platformType}
    <label><input type="checkbox" bind:group={requestParam.platformTypeCodeList} value={platformType}>{platformType}</label>
{/each}

<label><input type="radio" bind:group={requestParam.blockStorageSize} value={50}>50</label>
<label><input type="radio" bind:group={requestParam.blockStorageSize} value={100}>100</label>

<button on:click={getServerImageProduct}>
    Click
</button>

<div>{serverImageProduct.totalRows}</div>
{#each serverImageProduct.productList as product}
    <div>
        <h4>{product.productName}</h4>
        <div>{product.osInformation}</div>
    </div>
{/each}