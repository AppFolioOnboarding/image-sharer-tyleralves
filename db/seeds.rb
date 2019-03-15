# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

urls = %w[
  https://www.nps.gov/yose/planyourvisit/images/20170618_155330.jpg
  https://www.geek.com/wp-content/uploads/2019/02/firefall1-625x352.jpg
  https://www.nps.gov/common/uploads/grid_builder/yose/crop16_9/2A84C724-1DD8-B71B-0B0F4361A736E640.jpg
  https://media.npr.org/assets/img/2018/10/29/gettyimages-639286800-14fdfbf984986a3c55d5e2425a7d7815a8914382-s800-c85.jpg
  https://www.tripsavvy.com/thmb/OMRlWjMnArpwysRHlDvcUPo04j8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/10510864996_57022feb3d_o-56a3862c3df78cf7727dda74.jpg
  https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA1My8yODIvb3JpZ2luYWwvd2F0ZXJmYWxscy0yLXVwcGVyeW9zZW1pdGVmYWxsLmpwZw==
  https://fitt.co/san-francisco/wp-content/uploads/sites/26/2018/02/Half-dome-@michaelmotacos-e1517590173922.jpg
  http://www.visitcalifornia.com/now/sites/default/files/styles/article_hero/public/cn_blog_yosemite_hetch_hetchy_stock_rf_824101204_1632x1088.jpg?itok=y9W9hMmL
  https://petapixel.com/assets/uploads/2019/01/1_gG9e1wIARPoueygbps_Zrg-800x606.jpg
  https://www.travelyosemite.com/media/820617/adobestock_196063806_1000x500.jpg
  https://cdn-files.apstatic.com/climb/107503295_smallMed_1494193867.jpg
  https://cdn-files.apstatic.com/climb/105962995_smallMed_1494064489.jpg
  http://farm6.staticflickr.com/5527/14303878440_5534ee7aa2_o.jpg
  https://www.nps.gov/yose/learn/nature/images/meadow-tuolumne-cl-415-web_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false
  https://upload.wikimedia.org/wikipedia/commons/a/a3/Tuolumne_Meadows_Sunset.jpg
  https://www.yosemite.com/wp-content/uploads/2016/04/2670749782_bcbe8f6d96_o.jpg
  https://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/TuolumneMeadows_BrandonLevingerFlickr_1280x642.jpg
  https://californiathroughmylens.com/wp-content/uploads/2016/09/backpacking-glen-aulin-27-640x427.jpg
  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3Nn3s6YtaNOfKJ6Y6A820D2s17NVvjeYerONtZOBueUSXqOP
  https://i.pinimg.com/236x/df/b9/bf/dfb9bf5531a01da5b52f1e2a1069c904--tuolumne-meadows-mule-deer.jpg
  https://lastingadventures.com/wp-content/uploads/2017/04/Yosemite-Valley-to-Tuolumne-Meadows-Backpacking-Trip.jpg
  https://img.hipcamp.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1434074412/campground-photos/zwdytfjucx2bcjuhekwn/tuolumne-meadows-campground.jpg
]

urls.each do |url|
  Image.create(url: url)
end
