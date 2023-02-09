<template>
    <div className="wrapper loader-wrapper">
        <div className="loader"></div>
    </div>
</template>
<style scoped>
.loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

}

.loader {
    border: 2px solid #f3f3f3;
    border-top: 13px solid #000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 2s linear infinite;


}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>