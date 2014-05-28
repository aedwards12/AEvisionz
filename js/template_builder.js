require(["underscore"],

var data ={
  "largethumb_" :[
    {
      "largethumb": "_-Stacy3_lg.jpg" 
    },
    {
      "largethumb": "20120317-IMG_3845_lg.jpg" 
    },
    {
      "largethumb": "20120414-20120414-IMG_6596louis_lg.jpg" 
    },
    {
      "largethumb": "20120429-IMG_0633-1_lg.jpg" 
    },
    {
      "largethumb": "20120519-michelle2_lg.jpg" 
    },
    {
      "largethumb": "20120512-daniellewood_lg.jpg" 
    },
    {
      "largethumb": "20130107-20130107-IMG_0880_HDR-Edit-2_lg.jpg" 
    },
    {
      "largethumb": "20130112-IMG_1096-1_lg.jpg" 
    },
    {
      "largethumb": "20130126-Arielle_lg.jpg" 
    },
     {
      "largethumb": "20130210-IMG_4518-Edit-3_lg.jpg" 
    },
     {
      "largethumb": "20130317-ivelisse_sm_lg.jpg" 
    },
     {
      "largethumb": "20130516-20130516-IMG_9022_HDR_3-2_lg.jpg" 
    },
     {
      "largethumb": "20130519-20130519-flava_callage1-2_lg.jpg" 
    },
     {
      "largethumb": "autumnscape_lg.jpg" 
    },
     {
      "largethumb": "brianny-_lg.jpg" 
    },
     {
      "largethumb": "capp-101_lg.jpg" 
    },
     {
      "largethumb": "Castro_Wedding-4596_lg.jpg" 
    },
     {
      "largethumb": "Castro_Wedding-4624_lg.jpg" 
    },
     {
      "largethumb": "Castro_Wedding-4903_lg.jpg" 
    },
     {
      "largethumb": "Castro_Wedding-4913_lg.jpg" 
    },
     {
      "largethumb": "Castro_Wedding-4920_lg.jpg" 
    },
     {
      "largethumb": "Castro_Wedding-4922_lg.jpg" 
    },
     {
      "largethumb": "Castro_Wedding-6270_lg.jpg" 
    },
     {
      "largethumb": "haley3168-Edit_lg.jpg" 
    },
     {
      "largethumb": "haleyn_lg.jpg" 
    },
     {
      "largethumb": "haleyn3_lg.jpg" 
    },
     {
      "largethumb": "IMG_1540_1_lg.jpg" 
    },
     {
      "largethumb": "ivelisseheadshot_lg.jpg" 
    },
     {
      "largethumb": "nena_comp2_lg.jpg" 
    },
     {
      "largethumb": "paintballfinal2_lg.jpg" 
    },
     {
      "largethumb": "Photo-Mar-17,-2-28-55-PM_lg.jpg" 
    },
     {
      "largethumb": "sav1-4_lg.jpg" 
    },
     {
      "largethumb": "scapes-0340_lg.jpg" 
    },
    {
      "largethumb": "skyline_NYC-1_lg.jpg" 
    },
    {
      "largethumb": "stephhdr3_lg.jpg" 
    },
    {
      "largethumb": "weddingfinal_lg.jpg" 
    }
  ]
}

var output = "";
var compiled = _.template(
  "<a href= <%= largethumb %> data-lightbox='port'></a>");
 
var toappend = " ";
for (var i = 0; i < data.largethumb_.length; i++){
  output = compiled(data.largethumb_[i]);
  console.log(output);
  
}