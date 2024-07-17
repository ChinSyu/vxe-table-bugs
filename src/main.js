/*
 * @Author: chin syu
 * @Date: 2024-07-17 16:25:41
 * @LastEditTime: 2024-07-17 16:36:02
 * @Description: 
 * 
 * © TAKAOKA TOKO CO., LTD. 
 */
import { createApp } from 'vue'
import App from "./App.vue";
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'

createApp(App).use(VxeUI).use(VXETable).mount("#app");
