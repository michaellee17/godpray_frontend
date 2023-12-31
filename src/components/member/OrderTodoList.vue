<template>
    <loading :active="isLoading" :is-full-page="fullPage"></loading>
    <div class="py-40px md:px-50px">
        <h4 class="mb-20px">
            訂單編號 <span class="notice">#{{ order.order_id }}</span> 於<span
                class="notice"
                >{{ order.date }}</span
            >
            下單，目前狀態為 <span class="notice">{{ order.status }}</span
            >。
        </h4>
        <div v-for="item in prayers" :key="item.name" class="w-full list">
            <button class="order_list_btn hidden md:block">第一位信眾</button>
            <div class="line">
                <h5>信眾姓名:</h5>
                <h5>{{ item.name }}</h5>
            </div>
            <div class="line">
                <h5>性別:</h5>
                <h5>{{ item.gender }}</h5>
            </div>
            <div class="line">
                <h5>農曆生日:</h5>
                <h5>
                    {{ item.yValue }} 年 {{ item.mValue }} 月
                    {{ item.dValue }} 日 {{ item.tValue }} 時
                </h5>
            </div>
            <div class="line">
                <h5>地址:</h5>
                <h5>
                    {{ item.zipCode }}{{ item.selectedCity }}，{{
                        item.selectedArea
                    }}
                </h5>
            </div>
            <div class="line">
                <h5>詳細地址:</h5>
                <h5>{{ item.address }}</h5>
            </div>
        </div>
        <div>
            <h4 class="payment">付款資訊</h4>
            <div class="line">
                <h5>燈別:</h5>
                <h5>
                    <span class="notice">{{ order.name }}</span>
                </h5>
            </div>
            <div class="line">
                <h5>總計:</h5>
                <h5>NT${{ order.total.toLocaleString() }}</h5>
            </div>
            <div class="line">
                <h5>付款方式:</h5>
                <h5>{{ order.payment }}</h5>
            </div>
            <div class="line">
                <h5>付款狀態:</h5>
                <h5
                    v-show="
                        order.status === '等待付款中' || order.status === '取消'
                    "
                >
                    未付款
                </h5>
                <h5
                    v-show="
                        order.status === '處理中' || order.status === '已完成'
                    "
                >
                    已付款
                </h5>
            </div>
            <div class="mt-10px">
                <h6 class="mb-10px">備註:</h6>
                <p>{{ order.note }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
//官方套件
import { ref, onMounted } from "vue";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const props = defineProps({
    order: Object,
});

const isLoading = ref(false);
const fullPage = ref(true);
const prayers = ref([]);
onMounted(async () => {
    const params = {
        order_id: props.order.order_id,
        count: props.order.count,
    };

    try {
        isLoading.value = true;
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_PATH}api/gc/order/prayer/detail`,
            { params: params }
        );
        prayers.value = response.data;
    } catch (error) {
        console.error("API 請求失敗:", error);
    } finally {
        isLoading.value = false;
    }
});

//自製組件
</script>
<style scoped>
.order_list_btn {
    width: 152px;
    height: 43px;
    background-color: #ceb96e;
    color: #ffffff;
    outline: none;
    border-radius: 0;
    border: none;
}
.order_list_btn:hover {
    color: #ceb96e;
    background-color: #ffffff;
}
.notice {
    color: #543118;
}
.mobile_order {
    border: 1px solid #d9d9d9;
    margin-bottom: 30px;
    padding-left: 8px;
    padding-right: 8px;
}
.payment {
    margin-top: 30px;
    margin-bottom: 20px;
    font-family: Noto Serif TC;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0.2em;
    text-align: left;
    color: #000000;
}
.list {
    padding: 40px 0;
    border-bottom: 2px dotted #aaaaaa;
}
.line {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #eeeeee;
    padding: 10px 0;
}
</style>
