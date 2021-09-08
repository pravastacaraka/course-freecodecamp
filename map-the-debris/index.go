package main

import (
	"fmt"
	"math"
)

func orbitalPeriod(arr []map[string]interface{}) []map[string]interface{} {
	const GM float64 = 398600.4418
	const earthRadius float64 = 6367.4447

  newArr := make([]map[string]interface{}, len(arr))
  for i := 0; i < len(arr); i++ {
    newArr[i] = make(map[string]interface{})
    newArr[i]["name"] = arr[i]["name"]
    newArr[i]["orbitalPeriod"] = math.Round(2 * math.Pi * math.Sqrt(math.Pow(earthRadius + arr[i]["avgAlt"].(float64), 3) / GM))
  }
  return newArr
}

func main() {
  fmt.Println(orbitalPeriod([]map[string]interface{}{{"name": "sputnik", "avgAlt": 35873.5553}}))
}
