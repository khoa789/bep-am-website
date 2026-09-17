import expandedAlbums from "./collection-albums-expanded.json";
import aerialAlbums from "./collection-albums-aerial.json";

export interface CollectionAlbumImage {
  id: string;
  image: string;
  title: string;
  layout: string;
  space: string;
  alt: string;
  colorNotes?: string;
}

export const collectionAlbums: Record<string, CollectionAlbumImage[]> = {
  ...expandedAlbums,
  ...aerialAlbums,
  "can-ho-tinh-gon": [
    {
      "id": "can-ho-tinh-gon-01",
      "image": "can-ho-tinh-gon/01-trang-ngoc-trai",
      "title": "Trắng ngọc trai",
      "layout": "Chữ I",
      "space": "Căn hộ studio",
      "alt": "Phối cảnh AI bếp cánh bóng kính trắng ngọc trai, bố trí chữ i trong căn hộ studio."
    },
    {
      "id": "can-ho-tinh-gon-02",
      "image": "can-ho-tinh-gon/02-sage-kem",
      "title": "Sage và kem",
      "layout": "Chữ L",
      "space": "Căn hộ hai phòng ngủ",
      "alt": "Phối cảnh AI bếp cánh bóng kính sage và kem, bố trí chữ l trong căn hộ hai phòng ngủ."
    },
    {
      "id": "can-ho-tinh-gon-03",
      "image": "can-ho-tinh-gon/03-xanh-bui",
      "title": "Xanh lam bụi",
      "layout": "Song song",
      "space": "Căn hộ dài hẹp",
      "alt": "Phối cảnh AI bếp cánh bóng kính xanh lam bụi, bố trí song song trong căn hộ dài hẹp."
    },
    {
      "id": "can-ho-tinh-gon-04",
      "image": "can-ho-tinh-gon/04-champagne",
      "title": "Champagne dịu",
      "layout": "Chữ L",
      "space": "Căn hộ góc",
      "alt": "Phối cảnh AI bếp cánh bóng kính champagne dịu, bố trí chữ l trong căn hộ góc."
    },
    {
      "id": "can-ho-tinh-gon-05",
      "image": "can-ho-tinh-gon/05-greige",
      "title": "Greige sáng",
      "layout": "Chữ U",
      "space": "Căn hộ gia đình nhỏ",
      "alt": "Phối cảnh AI bếp cánh bóng kính greige sáng, bố trí chữ u trong căn hộ gia đình nhỏ."
    },
    {
      "id": "can-ho-tinh-gon-06",
      "image": "can-ho-tinh-gon/06-xanh-bac-ha",
      "title": "Xanh bạc hà",
      "layout": "Chữ I",
      "space": "Studio có ban công",
      "alt": "Phối cảnh AI bếp cánh bóng kính xanh bạc hà, bố trí chữ i trong studio có ban công."
    },
    {
      "id": "can-ho-tinh-gon-07",
      "image": "can-ho-tinh-gon/07-xam-ngoc",
      "title": "Xám ngọc",
      "layout": "Chữ L",
      "space": "Căn hộ tối giản",
      "alt": "Phối cảnh AI bếp cánh bóng kính xám ngọc, bố trí chữ l trong căn hộ tối giản."
    },
    {
      "id": "can-ho-tinh-gon-08",
      "image": "can-ho-tinh-gon/08-kem-dao",
      "title": "Kem đào",
      "layout": "Chữ I",
      "space": "Căn hộ trẻ",
      "alt": "Phối cảnh AI bếp cánh bóng kính kem đào, bố trí chữ i trong căn hộ trẻ."
    },
    {
      "id": "can-ho-tinh-gon-09",
      "image": "can-ho-tinh-gon/09-olive-sang",
      "title": "Olive sáng",
      "layout": "Chữ L",
      "space": "Căn hộ hướng vườn",
      "alt": "Phối cảnh AI bếp cánh bóng kính olive sáng, bố trí chữ l trong căn hộ hướng vườn."
    },
    {
      "id": "can-ho-tinh-gon-10",
      "image": "can-ho-tinh-gon/10-trang-xanh-khoi",
      "title": "Trắng và xanh khói",
      "layout": "Song song",
      "space": "Căn hộ đô thị",
      "alt": "Phối cảnh AI bếp cánh bóng kính trắng và xanh khói, bố trí song song trong căn hộ đô thị."
    },
    {
      "id": "can-ho-tinh-gon-11",
      "image": "can-ho-tinh-gon/11-be-cat",
      "title": "Be cát",
      "layout": "Chữ L + bán đảo",
      "space": "Căn hộ mở",
      "alt": "Phối cảnh AI bếp cánh bóng kính be cát, bố trí chữ l + bán đảo trong căn hộ mở."
    },
    {
      "id": "can-ho-tinh-gon-12",
      "image": "can-ho-tinh-gon/12-ghi-anh-tim",
      "title": "Ghi ánh tím",
      "layout": "Chữ I",
      "space": "Studio tinh giản",
      "alt": "Phối cảnh AI bếp cánh bóng kính ghi ánh tím, bố trí chữ i trong studio tinh giản."
    },
    {
      "id": "can-ho-tinh-gon-13",
      "image": "can-ho-tinh-gon/13-trang-inox",
      "title": "Trắng và inox",
      "layout": "Chữ U",
      "space": "Căn hộ sáng",
      "alt": "Phối cảnh AI bếp cánh bóng kính trắng và inox, bố trí chữ u trong căn hộ sáng."
    },
    {
      "id": "can-ho-tinh-gon-14",
      "image": "can-ho-tinh-gon/14-xanh-ngoc-nhat",
      "title": "Xanh ngọc nhạt",
      "layout": "Chữ L",
      "space": "Căn hộ cạnh sông",
      "alt": "Phối cảnh AI bếp cánh bóng kính xanh ngọc nhạt, bố trí chữ l trong căn hộ cạnh sông."
    },
    {
      "id": "can-ho-tinh-gon-15",
      "image": "can-ho-tinh-gon/15-taupe-kem",
      "title": "Taupe và kem",
      "layout": "Song song mở",
      "space": "Căn hộ gia đình",
      "alt": "Phối cảnh AI bếp cánh bóng kính taupe và kem, bố trí song song mở trong căn hộ gia đình."
    }
  ],
  "hai-hoa-ban-menh": [
    {
      "id": "hai-hoa-ban-menh-01",
      "image": "hai-hoa-ban-menh/01-ngoc-trai-champagne",
      "title": "Ngọc trai và champagne",
      "layout": "Chữ L + đảo",
      "space": "Nhà vườn sáng",
      "alt": "Phối cảnh AI bếp cánh bóng kính ngọc trai và champagne, bố trí chữ l + đảo trong nhà vườn sáng."
    },
    {
      "id": "hai-hoa-ban-menh-02",
      "image": "hai-hoa-ban-menh/02-trang-bac",
      "title": "Trắng bạc",
      "layout": "Chữ I + đảo",
      "space": "Nhà phố giếng trời",
      "alt": "Phối cảnh AI bếp cánh bóng kính trắng bạc, bố trí chữ i + đảo trong nhà phố giếng trời."
    },
    {
      "id": "hai-hoa-ban-menh-03",
      "image": "hai-hoa-ban-menh/03-ghi-su",
      "title": "Ghi sứ",
      "layout": "Chữ U",
      "space": "Căn hộ sáng",
      "alt": "Phối cảnh AI bếp cánh bóng kính ghi sứ, bố trí chữ u trong căn hộ sáng."
    },
    {
      "id": "hai-hoa-ban-menh-04",
      "image": "hai-hoa-ban-menh/04-xanh-rung",
      "title": "Xanh rừng",
      "layout": "Chữ I + đảo",
      "space": "Nhà hướng vườn",
      "alt": "Phối cảnh AI bếp cánh bóng kính xanh rừng, bố trí chữ i + đảo trong nhà hướng vườn."
    },
    {
      "id": "hai-hoa-ban-menh-05",
      "image": "hai-hoa-ban-menh/05-xanh-reu",
      "title": "Xanh rêu",
      "layout": "Chữ L",
      "space": "Nhà phố sân trong",
      "alt": "Phối cảnh AI bếp cánh bóng kính xanh rêu, bố trí chữ l trong nhà phố sân trong."
    },
    {
      "id": "hai-hoa-ban-menh-06",
      "image": "hai-hoa-ban-menh/06-xanh-ngoc-bich",
      "title": "Xanh ngọc bích",
      "layout": "Chữ U",
      "space": "Biệt thự sân vườn",
      "alt": "Phối cảnh AI bếp cánh bóng kính xanh ngọc bích, bố trí chữ u trong biệt thự sân vườn."
    },
    {
      "id": "hai-hoa-ban-menh-07",
      "image": "hai-hoa-ban-menh/07-xanh-hai-quan",
      "title": "Xanh hải quân",
      "layout": "Chữ L + đảo",
      "space": "Căn hộ ven sông",
      "alt": "Phối cảnh AI bếp cánh bóng kính xanh hải quân, bố trí chữ l + đảo trong căn hộ ven sông."
    },
    {
      "id": "hai-hoa-ban-menh-08",
      "image": "hai-hoa-ban-menh/08-xanh-petrol",
      "title": "Xanh petrol",
      "layout": "Song song",
      "space": "Nhà phố hiện đại",
      "alt": "Phối cảnh AI bếp cánh bóng kính xanh petrol, bố trí song song trong nhà phố hiện đại."
    },
    {
      "id": "hai-hoa-ban-menh-09",
      "image": "hai-hoa-ban-menh/09-den-khoi",
      "title": "Đen khói",
      "layout": "Chữ I + đảo",
      "space": "Penthouse sáng",
      "alt": "Phối cảnh AI bếp cánh bóng kính đen khói, bố trí chữ i + đảo trong penthouse sáng."
    },
    {
      "id": "hai-hoa-ban-menh-10",
      "image": "hai-hoa-ban-menh/10-do-ruou",
      "title": "Đỏ rượu vang",
      "layout": "Chữ L",
      "space": "Nhà phố ấm",
      "alt": "Phối cảnh AI bếp cánh bóng kính đỏ rượu vang, bố trí chữ l trong nhà phố ấm."
    },
    {
      "id": "hai-hoa-ban-menh-11",
      "image": "hai-hoa-ban-menh/11-dat-nung",
      "title": "Đất nung dịu",
      "layout": "Chữ I + đảo",
      "space": "Nhà có sân trong",
      "alt": "Phối cảnh AI bếp cánh bóng kính đất nung dịu, bố trí chữ i + đảo trong nhà có sân trong."
    },
    {
      "id": "hai-hoa-ban-menh-12",
      "image": "hai-hoa-ban-menh/12-hong-dat",
      "title": "Hồng đất",
      "layout": "Chữ U",
      "space": "Căn hộ đón nắng",
      "alt": "Phối cảnh AI bếp cánh bóng kính hồng đất, bố trí chữ u trong căn hộ đón nắng."
    },
    {
      "id": "hai-hoa-ban-menh-13",
      "image": "hai-hoa-ban-menh/13-be-mat-ong",
      "title": "Be mật ong",
      "layout": "Chữ L + đảo",
      "space": "Nhà vườn nhiệt đới",
      "alt": "Phối cảnh AI bếp cánh bóng kính be mật ong, bố trí chữ l + đảo trong nhà vườn nhiệt đới."
    },
    {
      "id": "hai-hoa-ban-menh-14",
      "image": "hai-hoa-ban-menh/14-nau-ca-phe",
      "title": "Nâu cà phê",
      "layout": "Chữ I + đảo",
      "space": "Nhà phố rộng",
      "alt": "Phối cảnh AI bếp cánh bóng kính nâu cà phê, bố trí chữ i + đảo trong nhà phố rộng."
    },
    {
      "id": "hai-hoa-ban-menh-15",
      "image": "hai-hoa-ban-menh/15-vang-cat",
      "title": "Vàng cát",
      "layout": "Chữ L",
      "space": "Căn hộ góc ấm",
      "alt": "Phối cảnh AI bếp cánh bóng kính vàng cát, bố trí chữ l trong căn hộ góc ấm."
    }
  ],
  "nhip-song-hien-dai": [
    {
      "id": "nhip-song-hien-dai-01",
      "image": "nhip-song-hien-dai/01-graphite-do-thi",
      "title": "Graphite đô thị",
      "layout": "Chữ I + đảo",
      "space": "Căn hộ thành thị",
      "alt": "Phối cảnh AI bếp cánh bóng kính graphite đô thị, bố trí chữ i + đảo trong căn hộ thành thị."
    },
    {
      "id": "nhip-song-hien-dai-02",
      "image": "nhip-song-hien-dai/02-dong-khoi",
      "title": "Đồng khói",
      "layout": "Chữ L + đảo",
      "space": "Penthouse",
      "alt": "Phối cảnh AI bếp cánh bóng kính đồng khói, bố trí chữ l + đảo trong penthouse."
    },
    {
      "id": "nhip-song-hien-dai-03",
      "image": "nhip-song-hien-dai/03-trang-den",
      "title": "Trắng và đen",
      "layout": "Chữ I + đảo",
      "space": "Loft sáng",
      "alt": "Phối cảnh AI bếp cánh bóng kính trắng và đen, bố trí chữ i + đảo trong loft sáng."
    },
    {
      "id": "nhip-song-hien-dai-04",
      "image": "nhip-song-hien-dai/04-greige-gia-dinh",
      "title": "Greige gia đình",
      "layout": "Chữ U",
      "space": "Nhà nhiều thế hệ",
      "alt": "Phối cảnh AI bếp cánh bóng kính greige gia đình, bố trí chữ u trong nhà nhiều thế hệ."
    },
    {
      "id": "nhip-song-hien-dai-05",
      "image": "nhip-song-hien-dai/05-xanh-dem",
      "title": "Xanh đêm",
      "layout": "Chữ L + đảo",
      "space": "Căn hộ ven sông",
      "alt": "Phối cảnh AI bếp cánh bóng kính xanh đêm, bố trí chữ l + đảo trong căn hộ ven sông."
    },
    {
      "id": "nhip-song-hien-dai-06",
      "image": "nhip-song-hien-dai/06-champagne-mo",
      "title": "Champagne rộng mở",
      "layout": "Chữ I + đảo",
      "space": "Nhà liền phòng khách",
      "alt": "Phối cảnh AI bếp cánh bóng kính champagne rộng mở, bố trí chữ i + đảo trong nhà liền phòng khách."
    },
    {
      "id": "nhip-song-hien-dai-07",
      "image": "nhip-song-hien-dai/07-xam-thep",
      "title": "Xám thép",
      "layout": "Song song",
      "space": "Nhà phố tiện nghi",
      "alt": "Phối cảnh AI bếp cánh bóng kính xám thép, bố trí song song trong nhà phố tiện nghi."
    },
    {
      "id": "nhip-song-hien-dai-08",
      "image": "nhip-song-hien-dai/08-olive-graphite",
      "title": "Olive và graphite",
      "layout": "Chữ L + đảo",
      "space": "Nhà hướng sân",
      "alt": "Phối cảnh AI bếp cánh bóng kính olive và graphite, bố trí chữ l + đảo trong nhà hướng sân."
    },
    {
      "id": "nhip-song-hien-dai-09",
      "image": "nhip-song-hien-dai/09-kem-toi-gian",
      "title": "Kem tối giản",
      "layout": "Chữ I + đảo",
      "space": "Biệt thự hiện đại",
      "alt": "Phối cảnh AI bếp cánh bóng kính kem tối giản, bố trí chữ i + đảo trong biệt thự hiện đại."
    },
    {
      "id": "nhip-song-hien-dai-10",
      "image": "nhip-song-hien-dai/10-taupe-tiec-nha",
      "title": "Taupe sum họp",
      "layout": "Chữ L + bán đảo",
      "space": "Căn hộ tiếp khách",
      "alt": "Phối cảnh AI bếp cánh bóng kính taupe sum họp, bố trí chữ l + bán đảo trong căn hộ tiếp khách."
    },
    {
      "id": "nhip-song-hien-dai-11",
      "image": "nhip-song-hien-dai/11-petrol-da-trang",
      "title": "Petrol và đá trắng",
      "layout": "Chữ I + đảo",
      "space": "Duplex",
      "alt": "Phối cảnh AI bếp cánh bóng kính petrol và đá trắng, bố trí chữ i + đảo trong duplex."
    },
    {
      "id": "nhip-song-hien-dai-12",
      "image": "nhip-song-hien-dai/12-nau-khoi",
      "title": "Nâu khói",
      "layout": "Chữ U + đảo",
      "space": "Nhà vườn rộng",
      "alt": "Phối cảnh AI bếp cánh bóng kính nâu khói, bố trí chữ u + đảo trong nhà vườn rộng."
    },
    {
      "id": "nhip-song-hien-dai-13",
      "image": "nhip-song-hien-dai/13-ghi-xanh",
      "title": "Ghi xanh",
      "layout": "Song song mở",
      "space": "Nhà phố giếng trời",
      "alt": "Phối cảnh AI bếp cánh bóng kính ghi xanh, bố trí song song mở trong nhà phố giếng trời."
    },
    {
      "id": "nhip-song-hien-dai-14",
      "image": "nhip-song-hien-dai/14-xanh-rung-dem",
      "title": "Xanh rừng buổi tối",
      "layout": "Chữ L + đảo",
      "space": "Nhà sân vườn",
      "alt": "Phối cảnh AI bếp cánh bóng kính xanh rừng buổi tối, bố trí chữ l + đảo trong nhà sân vườn."
    },
    {
      "id": "nhip-song-hien-dai-15",
      "image": "nhip-song-hien-dai/15-ngoc-trai-rong-mo",
      "title": "Ngọc trai rộng mở",
      "layout": "Chữ L + đảo",
      "space": "Nhà gia đình hiện đại",
      "alt": "Phối cảnh AI bếp cánh bóng kính ngọc trai rộng mở, bố trí chữ l + đảo trong nhà gia đình hiện đại."
    }
  ]
};

export function collectionImagePath(image: CollectionAlbumImage, width: 320 | 800 | 1600) {
  return `/images/collections/${image.image}-${width}.webp`;
}
