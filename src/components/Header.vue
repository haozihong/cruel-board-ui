<template>
  <div id="header">
    <el-link id="logo-title" href="https://wisdompeak.github.io/lc-score-board/" :underline="false">
      <div>
        <img src="../assets/YouXiuLogo.png" alt="logo">
        <h1 class="hidden-xs-only">残酷刷题群</h1>
      </div>
    </el-link>

    <div id="links">
      <el-link :underline="false" @click="joiningInfoVisible = true">入群</el-link>
      <el-divider direction="vertical"></el-divider>
      <el-link href="https://bit.ly/2X0NW4e" icon="el-icon-link">每日题列表</el-link>
      <el-divider direction="vertical"></el-divider>
      <el-link :underline="false" @click="otherInfoVisible = true">其他链接</el-link>
      <el-divider direction="vertical"></el-divider>
      <el-link :underline="false" @click="curveFormVisible = true">统计</el-link>
    </div>

    <el-dialog title="入群割韭菜" :visible.sync="joiningInfoVisible" center>
      <p>
        If you are interested in joining this group, please contact: <a href="mailto:guan.huifeng@gmail.com">guan.huifeng@gmail.com</a>.
      </p>
      <p>
        Make sure you agree with our <el-link type="primary" href="https://wisdompeak.github.io/lc-score-board/rules.html">terms and regulations</el-link>.
        Think twice before you apply.
      </p>
      <p>
        [<el-link type="danger" href="https://wisdompeak.github.io/lc-score-board/Blacklist/Darren_Zang.html">Blacklisted Persons</el-link>]
      </p>
    </el-dialog>

    <el-dialog title="其他链接" width="40%" :visible.sync="otherInfoVisible" center>
      <p><el-link type="primary" href="https://docs.google.com/presentation/d/11Vv8RnbGZm8hQEa9T6DhxtMtsBknI1Io0nfcFVVOYUw/">Happy New Year! See 2020 Year-end Review!</el-link></p>
      <p><el-link type="primary" href="https://wisdompeak.github.io/lc-score-board/cup.html">Looking for more challenges? Try Wisdom Cup!</el-link></p>
      <p><el-link type="primary" href="https://www.google.com/maps/d/viewer?mid=1c1t3qKsKxTTnDD_P2BsFsrL7p8l9Bou8">See where we are from</el-link></p>
      <p><el-link type="primary" href="https://wisdompeak.github.io/lc-score-board/sd.html">Cruel System Design Group</el-link></p>
      <p><el-link type="primary" href="https://wisdompeak.github.io/lc-score-board/graduates.html">Graduated members and archived scores</el-link></p>
    </el-dialog>

    <el-dialog title="统计（点击看大图）" :visible.sync="curveFormVisible" center>
      <el-image
          src="https://board.cruelcoding.com/Img/curve.png"
          fit="contain"
          :preview-src-list="['https://board.cruelcoding.com/Img/curve.png']"
      ></el-image>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      joiningInfoVisible: false,
      otherInfoVisible: false,
      curveFormVisible: false
    }
  }
}
</script>

<style scoped>
#header {
  height: 100%;
}

#logo-title {
  margin-right: 0.5rem;
}

#logo-title div {
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo-title img {
  height: 30px;
  margin: 15px 0.5rem 15px 0;
}

#links {
  display: inline-block;
}
</style>