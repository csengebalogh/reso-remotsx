======== COMPOSITION ============
GET /composition

PUT /composition

POST /composition/effects/video/add/{offset}
POST /composition/effects/video/move/{offset}


======== LAYER ============
GET /composition/layers/{layer-index}
GET /composition/layers/selected

PUT /composition/layers/selected

POST /composition/layers/{layer-index}/select
POST /composition/layers/{layer-index}/clear
POST /composition/layers/selected/clear (disconnect only)

POST /composition/layers/selected/effects/video/add
POST /composition/layers/add 


======== CLIP ============
GET /composition/layers/{layer-index}/clips/{clip-index}
GET /composition/clips/selected
GET /composition/clips/selected/thumbnail/{last-updated}
✓ GET /composition/clips/by-id/{clip-id}

PUT /composition/layers/{layer-index}/clips/{clip-index}
PUT /composition/clips/selected

POST /composition/layers/{layer-index}/clips/{clip-index}/select
POST /composition/layers/{layer-index}/clips/{clip-index}/connect
POST /composition/clips/selected/connect
POST /composition/layers/{layer-index}/clips/{clip-index}/open 
    (https://resolume.com/docs/restapi/#/clip/clip_open)
POST /composition/clips/selected/open

GET /composition/effects/by-id/{effect-id}



