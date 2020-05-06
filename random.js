var rand = (start, end) => {
    var r
    n = end - start + 1 //求亂數的範圍 
    r = Math.random() * n // 放大
    r = Math.floor(r) // 去除小數點
    r += start // 位移
    return r
}

// 當HTML文件載入完成時執行
$(() => {
    // 這裡就是程式的開始
    console.log('JS 正常執行')

    // 當 id=main 的 html element 被按到的時候執行
    $('#main').on('click', () => {
        console.log('按到了喔')

        var n = $('#inputNumber').val()
        var x = 0
        var count_x = 0
        var str = ''
        for (i = 1; i <= n; i++) {
            x = rand(0,1)
            if(x==0) count_x += 1
            str += x
            str += " "
        }
        $('#outputRandom').val(str)
        $('#count_x').val(count_x)
        $('#count_y').val(n-count_x)
    })
})