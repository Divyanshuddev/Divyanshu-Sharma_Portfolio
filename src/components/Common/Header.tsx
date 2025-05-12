import { Divider, Stack, Typography, } from "@mui/material"

const styles = {
    divider: {
        backgroundColor: "#64FFDA",
        width: {
            lg: 400,
            md: 400,
            sm: 100,
            xs: 100
        },

    },
    title: {
        fontFamily: "Fira Code,Fira Mono,Roboto Mono",
        fontWeight: "bolder",
        fontSize: {
            lg: 30,
            md: 30,
            sm: 18,
            xs: 18
        },
        color: "white"
    }
}
interface HeaderProps {
    title: string;
}
const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <Stack direction={'row'} alignItems={'center'} spacing={4}  >
            <Typography sx={styles.title}>{title}</Typography>
            <Divider sx={styles.divider} />
        </Stack>
    )
}

export default Header
