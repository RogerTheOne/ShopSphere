<script setup>
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
const router = useRouter()
const userStore = useUserStore()
const confirm = () =>{
console.log('Account want to sign out')

  userStore.clearUserInfo()
  router.push('/login')
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="userStore.userInfo?.token">
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>Roger Zhang</a></li>
          <li>
            <el-popconfirm @confirm="confirm" title="Wanna go?" confirm-button-text="Yes" cancel-button-text="No">
              <template #reference>
                <a href="javascript:;">Sign out</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">My Order</a></li>
          <li><a href="javascript:;">My Account</a></li>
        </template>
        <template v-else>
           <li><a href="javascript:;" @click="$router.push('/login')">Sign In</a></li>
          <li><a href="javascript:;">Help Center</a></li>
          <li><a href="javascript:;">About Us</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>