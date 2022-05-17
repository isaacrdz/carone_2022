import React from "react";
import { Container, Box, Typography, Grid, Divider} from "@material-ui/core";
import Meta from "../../components/Meta";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	container:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center'
 }
}));

const index = () => {
  const classes = useStyles();
  var player;
  const onYouTubeIframeAPIReady = () => {
    player = new YT.Player("live-video", {
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }
 


  return (
    <>
      <Meta title="Car One TV - Car One Group" description="Car One TV" />

      <Container className='VideoContainer' maxWidth="lg">
        
        <Box style={{paddingBlockEnd: "1rem"}}>
        <Typography variant="h4" style={{fontSize: "35px", fontWeight: 500, textAlign: "center"}}>
            Contacto
        </Typography>

        <Divider style={{ border: "1px" ,marginTop: '1em', marginBottom: '1em'}}/>

        </Box>

        <Grid container spacing={2}>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "100%", height: " 270px", objectFit: "cover",}} src="https://automotive-api.s3.us-east-2.amazonaws.com/6269ae3be8436b4af342ac97/c06b3efd-7ce4-4f7c-b885-75415235cf2e/maxresdefault.jpeg"/>
                </Box>

                <Box sx={{ paddingLeft: "3rem"}}>
                  <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Volkswagen Gonzalitos </Typography>
                  <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av San Jerónimo 101 Poniente, 64640 Monterrey, N.L. </Typography>
                  <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 8:00 - 20:00 | Sabado: 09:00 - 19:30 | Domingo: 10:00 - 18:30 </Typography>
                  <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 8989 3300</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://www.niveluno.mx/wp-content/uploads/2016/06/niveluno-kia-gonzalitos2-1.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "3rem"}}>
                  <Typography style={{ fontWeight: 600, fontSize: "20px"}}> KIA Gonzalitos </Typography>
                  <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: José Eleuterio González # 609 Jardín del, Obispado, 64050 Monterrey, N.L. </Typography>
                  <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 8:00 - 20:00 | Sabado: 09:00 - 20:00 | Domingo: 10:00 - 20:00 </Typography>
                  <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 2133 5000</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://i.ytimg.com/vi/-Hh9idkH8MA/maxresdefault.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "3rem"}}>
                  <Typography style={{ fontWeight: 600, fontSize: "20px"}}> KIA Frontera</Typography>
                  <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>  Dirección: Blvd. Miguel Hidalgo No. 1000, Col. Palma Real, 88710 Reynosa, Tamps. </Typography>
                  <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 9:00 - 20:00 | Sabado: 09:00 - 18:00 | Domingo: 10:00 - 17:00 </Typography>
                  <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 899 171 7000</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "116%", height: " 270px", objectFit: "cover"}} src="https://liderweb.mx/wp-content/uploads/2017/09/5A-KIA.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "7rem"}}>
                  <Typography style={{ fontWeight: 600, fontSize: "20px"}}> KIA Laredo</Typography>
                  <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av Reforma 4405, Campestre, 88275 Nuevo Laredo, Tamps. </Typography>
                  <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 9:00 - 20:00 | Sabado: 09:00 - 18:00 | Domingo: 10:00 - 17:00 </Typography>
                  <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 867 136 2700</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://abcnoticias.mx/u/fotografias/m/2021/10/22/f1280x720-150110_281785_8522.png"/>
                </Box>


                <Box sx={{ paddingLeft: "3rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> KIA Linda Vista</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av. Miguel Alemán 6062, Torres de Linda Vista, 67130 Guadalupe, N.L. </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 8:00 - 20:00 | Sabado: 08:00 - 20:00 | Domingo: 09:00 - 20:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 2133 5000</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://www.caronechevroletmonterrey.com.mx/content/dam/chevrolet/na/mx/es/index/about-us/AN-1.jpg?imwidth=960"/>
                </Box>


                <Box sx={{ paddingLeft: "3rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Ruíz Cortines </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av. Ruiz Cortines 902 Poniente, Linda Vista, 64410 Monterrey, N.L. </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 9:00 - 20:00 | Sabado: 09:00 - 20:00 | Domingo: 10:00 - 18:00</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 8150 4777 </Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "151%", height: " 270px", objectFit: "cover"}} src="https://www.niveluno.mx/wp-content/uploads/2016/08/MG_9079_baja.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "13rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Universidad </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Avenida Universidad, Av Casa Bella 1205, Col. Residencial, 66428 San Nicolás de los Garza, N.L.</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 9:00 - 20:00 | Sabado: 09:00 - 20:00 | Domingo: 10:00 - 18:00</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 8989 3884</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://i.ytimg.com/vi/YaWMTkaR9R4/maxresdefault.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "3rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Allende</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Carretera Nacional 650, Centro de Allende, 67350 Cd de Allende, N.L. </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 9:00 - 21:00 | Sabado: 09:00 - 21:00 | Domingo: 21:00 - 21:00</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 826 144 1000 </Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "112%", height: " 270px", objectFit: "cover"}} src="https://www.caronechevroletmonterrey.com.mx/content/dam/chevrolet/na/mx/es/index/about-us/AN-1.jpg?imwidth=960"/>
                </Box>


                <Box sx={{ paddingLeft: "6rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Las Torres</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av Lázaro Cárdenas 2100, Laderas del Mirador (Fomerrey 21), 64900 Monterrey, N.L. </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 8:00 - 19:00 | Sabado: 08:00 - 13:00 | Domingo: Cerrado</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 8155 7777</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "131%", height: " 270px", objectFit: "cover"}} src="https://i.ytimg.com/vi/t1gu6ThbWPs/maxresdefault.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "10rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Las Bombas</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Calz. de las Bombas 310, Coapa, Jardines de Coyoacán, Coyoacán, 04890 Ciudad de México, CDMX</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 9:00 - 19:00 | Sabado: 08:00 - 17:00 | Domingo: 11:00 - 16:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 55 6382 0000</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://i.ytimg.com/vi/2TjXCTI4mIo/maxresdefault.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "3rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Concordia</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av. Concordia 5316, 66610 Cd Apodaca, N.L.</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 9:00 - 20:00 | Sabado: 20:00 - 17:00 | Domingo: 11:00 - 17:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 2133 4970</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://siempreauto.com/wp-content/uploads/sites/9/2021/02/2021-silverado-ld-trims-highcountry-e1613334769457.jpg?quality=60&strip=all&w=1200"/>
                </Box>


                <Box sx={{ paddingLeft: "3rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Fidel Velázquez </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección:  Av Fidel Velázquez #1693, Bernardo Reyes, 64280 Monterrey, N.L.</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 9:00 - 20:00 | Sabado: 20:00 - 18:00 | Domingo: 10:00 - 18:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 8888 1551</Typography>
                </Box>

              </Box>
            </Grid>


            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "158%", height: " 270px", objectFit: "cover"}} src="https://lh3.googleusercontent.com/p/AF1QipNloPmLPClZH2F3kjVZmOrDKcbBcAYJgA3S-pbE=w600-k"/>
                </Box>


                <Box sx={{ paddingLeft: "14rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Tlalpan </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Calz. de Tlalpan No.3311, Sta. Úrsula Coapa, Coyoacán, 04850 Ciudad de México, CDMX</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 8:30 - 20:00 | Sabado: 11:00 - 17:00 | Domingo: 08:30 - 20:00 </Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "102%", height: " 270px", objectFit: "cover"}} src="https://i.ytimg.com/vi/x14h6vEL0C8/maxresdefault.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "3rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Mitsubishi Linda Vista </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección:  Av. Miguel Alemán 6062-a Col, Torres de Linda Vista, 67120 Guadalupe, N.L. </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 08:30 - 20:00 | Sabado: 08:30 - 20:00 | Domingo: 11:00 - 17:00</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 8989 3780 </Typography>
                </Box>

              </Box>
            </Grid>
            

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "135%", height: " 270px", objectFit: "cover"}} src="https://mitsubishicarone.mx/wp-content/uploads/2021/06/montero.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "10rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Mitsubishi Saltillo </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Blvrd. Nazario Ortiz Garza 1720, Alpes, 25270 Saltillo, Coah. </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 09:30 - 20:00 | Sabado: 09:30 - 19:00 | Domingo: 09:00 - 18:00</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 844 424 9000</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "93%", height: " 270px", objectFit: "cover"}} src="https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/open-graph/2021/propietarios/distribuidores/ford-propietarios-seminuevos-certificados-directorio-distribuidores-agencia-sede.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "0rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Ford Lazaro Cardenas </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av Lázaro Cárdenas 2611, Burócratas Municipales, 64790 Monterrey, N.L.</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 9:00 - 20:00 | Sabado: 09:00 - 19:00 | Domingo: 10:00 - 18:00</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono:  81 8989 3000</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "102%", height: " 270px", objectFit: "cover"}} src="https://www.nissan-cdn.net/content/dam/Nissan/ar/agentes/Hero_banner_car_one.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "3rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Nissan SanJe </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Anillo Perif. 3000, La Otra Banda, Álvaro Obregón, 01090 Ciudad de México, CDMX </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 07:00 - 19:00 | Sabado: 07:00 - 17:00 | Domingo: 11:00 - 16:00</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 55 5683 7833</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "116%", height: " 270px", objectFit: "cover"}} src="https://www.liderempresarial.com/wp-content/uploads/2018/06/AAF48B9F-A6AC-4500-8C11-3F33B35E928A.jpeg"/>
                </Box>


                <Box sx={{ paddingLeft: "7rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Mercedes Benz Calzada del Valle </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Calz. del Valle 107, Del Valle, 66220 San Pedro Garza García, N.L. </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 09:00 - 20:00 | Sabado: 09:00 - 20:00 | Domingo: Cerrado</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 2133 7000</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "104%", height: " 270px", objectFit: "cover"}} src="https://cdn.motor1.com/images/mgl/KN3OM/s1/en-el-garage-de-autoblog-mercedes-benz-clase-a-sedan.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "4rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Mercedes Benz Gonzalitos</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> José Eleuterio Gonzalez 700, SUR, San Jeronimo, 64640 Monterrey, N.L. </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 09:00 - 20:00 | Sabado: 09:00 - 20:00 | Domingo: 09:00 - 18:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 8989 3100 </Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "90%", height: " 270px", objectFit: "cover"}} src="https://www.niveluno.mx/wp-content/uploads/2016/06/01-5.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "0rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chrysler Cumbres</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Los Triunfadores 6765-8° Sector, Col. Cumbres, 64610 Monterrey, N.L. </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 09:00 - 20:00 | Sabado: 09:00 - 19:00 | Domingo: Cerrado </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 8888 1000</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "91%", height: " 270px", objectFit: "cover"}} src="https://www.diariomotor.com/imagenes/picscache/1440x655c/chrysler-200-2017_1440x655c.jpg"/>
                </Box>


                <Box sx={{ paddingRight: "3rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chrysler Santa Lucia</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av. Miguel Alemán 6062, Valles de Linda Vista, 67130 Guadalupe, N.L. </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 07:00 - 19:00 | Sabado: 07:00 - 19:00 | Domingo: 07:00 - 18:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 8989 3700 </Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "110%", height: " 270px", objectFit: "cover"}} src="http://www.audicentercalzadadelvalle.com.mx/content/dam/iph/international/mx/MEX18510/Dealer_image/Dealer_Image_18510-920x518.jpg/jcr:content/renditions/cq5dam.thumbnail.1536.864.iph.png?imwidth=768&imdensity=1"/>
                </Box>


                <Box sx={{ paddingLeft: "6em"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> MG Calzada del Valle</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Calz. del Valle 103, Col. del Valle, Del Valle, 66220 San Pedro Garza García, N.L.</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 08:00 - 20:00 | Sabado: 08:00 - 20:00 | Domingo: 10:00 - 20:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 3145 5000</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "96%", height: " 270px", objectFit: "cover"}} src="https://www.niveluno.mx/wp-content/uploads/2016/06/seat-contry01.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "2rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Seat Contry</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av. Eugenio Garza Sada Sur 3890, Contry, 64780 Monterrey, N.L.</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 08:00 - 20:00 | Sabado: 08:00 - 20:00 | Domingo: 10:00 - 17:30 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 8989 3400</Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "125%", height: " 270px", objectFit: "cover"}} src="https://scontent.fntr3-1.fna.fbcdn.net/v/t31.18172-8/10734058_1608719822700792_4958093767813851761_o.jpg?_nc_cat=106&ccb=1-6&_nc_sid=e3f864&_nc_eui2=AeE-7Pd1F-CzlvgrQFJNnlHMSlNOukFn2kZKU066QWfaRhkC8rDyhUAsh5ydaHKCpyFJfntJdZZslEqzCJosjajF&_nc_ohc=aCebUsW16_8AX8MUSxo&_nc_ht=scontent.fntr3-1.fna&oh=00_AT8Y_s_0tSBpCqVprvRnmgkZ1S3O6EH3J6FGvneDZq1c6Q&oe=62A8598A"/>
                </Box>


                <Box sx={{ paddingLeft: "9rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Seat Linda Vista</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av. Miguel Alemán 4306, Col, 10 de Mayo, 67130 Monterrey, N.L.</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 08:00 - 20:00 | Sabado: 08:00 - 20:00 | Domingo: 10:00 - 18:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 8989 3500 </Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "149%", height: " 270px", objectFit: "cover"}} src="https://abcnoticias.mx/u/fotografias/m/2022/3/12/f850x638-163917_241406_5050.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "13rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Alfa Romeo Calzada del Valle</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Calz. del Valle 101, Col. del Valle, Del Valle, 66220 San Pedro Garza García, N.L.</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 09:00 - 20:00 | Sabado: 09:00 - 19:00 | Domingo: 12:00 - 18:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 8989 3500 </Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                
                <Box>
                <img style={{ width: "124%", height: " 270px", objectFit: "cover"}} src="https://topdriverz.nxtstatic.com/135/conversions/marca-mg-large.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "9rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> MG Corregidora </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: P.º de la República Km 13020, 76230 Juriquilla, Qro.</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 09:00 - 19:00 | Sabado: 09:00 - 17:00 | Domingo: 9:00 - 17:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 442 800 7200 </Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "133%", height: " 270px", objectFit: "cover"}} src="https://img.remediosdigitales.com/dd0097/mg-autos-chinos-mexico/1366_2000.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "10rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> MG Laredo </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av Reforma 4403, Campestre, 88278 Nuevo Laredo, Tamps.</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 09:00 - 20:00 | Sabado: 09:00 - 18:00 | Domingo: 10:00 - 17:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 867 234 3000 </Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "104%", height: " 270px", objectFit: "cover"}} src="https://acnews.blob.core.windows.net/imgnews/medium/NAZ_16ce8a64d8154b17a46c24ecf13e761c.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "4rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> MG Las Torres </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av Lázaro Cárdenas 2100, Sin Nombre de Col 39, 64900 Monterrey, N.L.</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 08:00 - 20:00 | Sabado: 08:00 - 20:00 | Domingo: 09:00 - 20:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 2525 8000 </Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "125%", height: " 270px", objectFit: "cover"}} src="https://img.gruporeforma.com/imagenes/960x640/6/66/5065584.jpg"/>
                </Box>


                <Box sx={{ paddingLeft: "9rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> MG Linda Vista </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección:  Av. Miguel Alemán 6062, Torres de Linda Vista, 67130 Guadalupe, N.L.</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 09:00 - 20:00 | Sabado: 09:00 - 20:00 | Domingo: 09:00 - 20:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono:  81 2530 7000 </Typography>
                </Box>

              </Box>
            </Grid>

            <Grid item md={12}>
              <Box sx={{display: "flex",  paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "106%", height: " 270px", objectFit: "cover"}} src="https://mglomasverdes.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-27-at-11.28.41-AM.jpeg"/>
                </Box>


                <Box sx={{ paddingLeft: "5rem"}}>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> MG Lomas Verdes </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av. Jardines de San Mateo 2, El Mirador, 53150 Naucalpan de Juárez, Méx.</Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Horaio: Lunes a Viernes 09:00 - 19:00 | Sabado: 11:00 - 17:00 | Domingo: 09:00 - 19:00 </Typography>
                <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 55 8876 8000</Typography>
                </Box>

              </Box>
            </Grid>




        </Grid>
      </Container>
    </>
  );
};

export default index;