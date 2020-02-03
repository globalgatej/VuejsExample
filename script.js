var app = new Vue({
    el: '#app',
    data: {
        bmiHeight: null,
        bmiWeight: null,
        runMin: null,
        runSec: null,
        currentTime: '',
        currentHour: '',
        currentMin: '',
        currentSec: '',
        shadowX: 0,
        shadowY: 0,
        shadowRange: 0,
        shadowBokeh: 0,
        tatsuya: ''

    },
    computed: {
        bmi() {
            var bmi = Math.round(this.bmiWeight / Math.pow(this.bmiHeight / 100, 2) * 10) / 10;
            return bmi ? bmi : '';
        },
        totalTime() {
            var totalSec = (this.runMin * 60 + this.runSec) * 42.195;
            var h = Math.floor(totalSec / 3600);
            var mTemp = totalSec % 3600;
            var m = Math.floor(mTemp / 60);
            var sTemp = mTemp % 60;
            var s = Math.round(sTemp);

            if (h && m && s) {
                return h + '時間' + m + '分' + s + '秒';
            } else {
                return '';
            }
        },
        shadow() {
            return this.shadowX + 'px ' + this.shadowY + 'px ' + this.shadowRange + 'px ' + this.shadowBokeh + 'px #000';
        }
    },
    filters: {
        toTatsuya(val) {
            return val.replace(/([あ-んア-ン])/g, "$1゛");

        }
    },
    mounted() {
        var vm = this;
        document.body.setAttribute('class', 'load');
        vm.updateTime();
        setInterval(vm.updateTime, 1000);
    },
    methods: {
        updateTime() {
            var today = new Date();
            this.currentTime = today.getHours() + '時' + today.getMinutes() + '分' + today.getSeconds() + '秒';
            this.currentHour = today.getHours();
            this.currentMin = today.getMinutes();
            this.currentSec = today.getSeconds();
        }
    }
})