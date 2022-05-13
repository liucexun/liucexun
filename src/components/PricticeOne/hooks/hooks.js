import { reactive,computed,ref} from "vue";

/* 表格相关的数据 */
export const stus = reactive([
    {
        name:'张三',
        age:18,
        phone:'13888888888',
    }
])
/* 过滤 */
export const filterStus = computed(() => {
    /* 如果他=空，就直接返回整个表格数据 */
    if (keyWord.value === '') {
        return stus;
    } else {
        // 如果不为空，就返回 stus过滤后的数据
        return stus.filter(item => {
            return item.name === keyWord.value
        })
    }
})



/* 表单相关的数据 */
export const stuInfo = reactive({
    name:'',
    age:'',
    phone:''
})
/* 新增按钮 */
export function addStu(){
    stus.push(Object.assign({},stuInfo))
}


/* 查询相关数据 */
export const keyWord = ref('')
export const searchWord = ref('')
export function doSearch() {
    keyWord.value = searchWord.value
}