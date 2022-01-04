<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script src="https://cdn.jsdelivr.net/npm/d3-geo-projection@4"></script>
<script src="http://localhost/npm_test/bertin/index.min.js"></script>

<script>

let geojson =   "../data/world.geojson"

d3.json(geojson).then(r =>
document.body.appendChild(bertin.plot({
  params: {
    projection: d3.geoVanDerGrinten4()
  },
  layers: [
      {type: "layer", geojson: r,  tooltip: ["ISO3", "NAMEen", ""] },
      {type:"outline"},
      {type:"graticule"}
    ]
})));

</script>
