<template>
    <div class="dashboard">
        <h1>Q'ilay</h1>
        <h2>Hello</h2>
        <div class="summary">
            <p>income</p>
            <p>outcome</p>
        </div>
    </div>
</template>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: left;
    height: 100vh;
    font-size: 20px;
    width: 100vw;
    max-width: 700px;
    justify-self: center;
}
.summary {
    display: flex;
    justify-content: space-between;
}
</style>