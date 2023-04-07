# Project Overview

## Garden Zone

The name of my project is called Garden Zone

# Project Description

Garden Zone is a Postgres, Django, Python and React build where the user is able to select what zone they live in, and the app will generate what vegetables are best to grow in the selected zone. The app will also allow users to create an account and must be logged in to create comments and add new vegetables.

# Wireframes

Link to my [wireframes](https://www.figma.com/file/f8PcSmse5SlvX48AS8JNrt/Garden-Zone?node-id=0%3A1)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643060401/Project%204/Screen_Shot_2022-01-24_at_4.39.58_PM_mjrbwv.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643060411/Project%204/Screen_Shot_2022-01-24_at_4.40.08_PM_stvzj4.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643060425/Project%204/Screen_Shot_2022-01-24_at_4.40.22_PM_tgokmz.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643120775/Project%204/Screen_Shot_2022-01-25_at_9.26.11_AM_vgw8wu.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643060484/Project%204/Screen_Shot_2022-01-24_at_4.41.19_PM_mpa5oz.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643060502/Project%204/Screen_Shot_2022-01-24_at_4.41.40_PM_yvjte8.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643060514/Project%204/Screen_Shot_2022-01-24_at_4.41.51_PM_cbd93z.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643060528/Project%204/Screen_Shot_2022-01-24_at_4.42.06_PM_kr9met.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643064619/Project%204/Screen_Shot_2022-01-24_at_5.50.15_PM_rzryxq.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643064632/Project%204/Screen_Shot_2022-01-24_at_5.50.29_PM_zo82gq.png)

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643064656/Project%204/Screen_Shot_2022-01-24_at_5.50.53_PM_v4kwvo.png)

## Entity Relationship Diagram

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643656844/Project%204/Screen_Shot_2022-01-31_at_2.20.37_PM_ocpji2.png)

## Component Hierarchy

![alt text](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643120394/Project%204/Screen_Shot_2022-01-25_at_9.19.50_AM_mrzkvl.png)

# Dependencies

### Backend Dependencies

- django
- djangorestframework
- psycopg2-binary
- djangorestframework-simplejwt
- gunicorn
- whitenoise
- dj-database-url
- python-dotenv
- django-cors-headers

### Frontend Dependencies

- React
- React Router
- Axios

# Routes

## Backend Routes

`zones/id` - Zone detail page that will render the specific zone's information.

```
{
"id": 1,

"name": "1",

"description": "USDA Plant Hardiness Zone 1 is the coldest zone designation for the United States. With minimum average temperatures between -60 to -50 degrees F, it can be a difficult zone for gardening. The majority of Zone 1 is located in Alaska. This tundra environment is extremely harsh and plants must have extreme cold hardiness and drought tolerance.",

"intro": "Planting in Zone 1 can be quite challenging. Plants able to withstand the tundra are rare. Native plants have already adapted to the area, so it makes sense that they’re a natural, excellent choice. Annuals are also a popular option, since they don’t need to survive the winter. While there are relatively few non-native perennials suitable for Zone 1, some can be grown with proper planting and care.",

"vegetables":[]
}
```

`/vegetables/id` - Vegetable detail page that will render the specific vegetable's information.

```
{
"id": 1,

"name": "Butter Lettuce",

"description": "Butterhead type lettuces are known for their 'buttery' taste and velvety texture, and small loosely formed heads. Relative to most other lettuce types, Butterheads are slightly more tolerant of heat. Even so, they are best planted early or late in the season in spring, away from the intense summer sun. They may be started indoors several weeks prior to the last frost of the season. Partial shade, or a location that receives primarily eastward exposure may be helpful if growing in summer. Butterheads usually need between 55-60 days to reach maturity, so plan your plantings accordingly. Leaves can be collected throughout the growing cycle. Space plants 10-12\" apart with 12\" between rows.",

"sunlight": "Lettuce grows best in full sun, though excessive heat can cause plants to bolt to seed, or leaves to wilt. For an early start, seeds can be started in flats 4 weeks prior to the last frost and transplanted outdoors in mid to late spring. If growing in summer, select a partially shaded location, or one that receives primarily eastward exposure to mitigate the potentially damaging effects of excessive heat upon lettuce.",

"care": "\"Butter lettuce prefers soil with plenty of organic material. One week prior to planting, mix organic material such as compost or a balanced 13-13-13 fertilizer into the soil, advises Louisiana State University AgCenter. Side-dress with a nitrogen fertilizer, such as a 21-0-0 fertilizer, about four weeks after transplanting the seedlings or when you thin the row.  Water frequently to keep the soil moist and encourage growth. Ideally, irrigate lettuce in the morning to give the leaves time to dry. Water-stressed lettuce may have poor growth and flavor. Avoid overwatering, which can damage the roots and leaves. Keep the garden free of weeds that may compete with the lettuce's shallow roots. Mulch will help to control weeds and keep the soil moist and cool.\"",

"image": "https://res.cloudinary.com/dn2x2ldxj/image/upload/v1643129590/Project%204/Buttercrunch-Bibb-LettuceBC4__26945.1605040802_mfqhpj.jpg",

"tips": "\"Butter lettuce will be ready to harvest earlier than other types of lettuce. When the heads are beginning to form and the leaves are curling inward, it is time to pick the lettuce. For bibb and buttercrisp lettuce varieties, the time to harvest is approximately 60 and 65 days, respectively, from planting, advises the University of Arkansas. Store lettuce in the refrigerator at 32 degrees Fahrenheit with high humidity. The lettuce will keep longer if the leaves are dry before you store it. With proper care and good environmental conditions, lettuce is easy to grow and has few problems. Watch out for insects that may infect your crop, including aphids, flea beetles and slugs, says Utah State University Extension. Prevent slugs by stopping the moist conditions they favor, and consider a floating row cover to keep insects away from seedlings. Wash away aphids with water and, if necessary, use insecticides to help to control pests.\"",

"zone": 6
}
```

## Frontend Routes

`/user/login/` - Login form

`/vegetables/create` - Vegetable create form where you can create a new vegetable.

`/vegetables/edit/id`- Vegetable edit form where any changes to the vegetable details can be updated or vegetable can be deleted.

The two routes below are only accessed via url, since there are only 13 zones, there wouldn't be a reason to create new zones.

`zones/create` - Zone create form where you can create a new zone.

`zones/edit/id` - Zone edit form where any changes to the zone details can be updated or zone can be deleted.
