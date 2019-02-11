<script>
import { Line } from 'vue-chartjs'

export default {
  name: 'LineChart',
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  created() {
    console.log(this.chartData);
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>