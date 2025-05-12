import { Avatar, Stack } from "@mui/material"
import myImage from '../../assets/photo_6114156567906599828_y.jpg'
const styles = {
    image: {
        width: {
            lg: 400,
            md: 400,
            sm: 200,
            xs: 200
        },
        height: {
            lg: 400,
            md: 400,
            sm: 200,
            xs: 200
        },
        boxShadow: "1px 1px 10px black"
    },
    overImage: {
        width: {
            lg: 400,
            md: 400,
            sm: 200,
            xs: 200
        },
        height: {
            lg: 400,
            md: 400,
            sm: 200,
            xs: 200
        },
        borderRadius: "50%",
        backgroundColor: "#64FFDA",
        position: "absolute",
        top: 0,
        opacity: 0.4
    }

}

const Image = () => {
    return (
        <Stack position={'relative'}>
            <Avatar src={myImage} sx={styles.image} />
            <Stack sx={styles.overImage}>
            </Stack>
        </Stack>
    )
}

export default Image
