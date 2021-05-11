import { styled } from '@material-ui/core/styles';
import { Container, Typography, Card, Avatar, FormControl } from '@material-ui/core';

export const StyledContainer = styled(Container) ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: "url('https://cdn.pixabay.com/photo/2020/06/12/09/30/code-5289831_1280.jpg') no-repeat center center fixed", 
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    backgroundSize: 'cover',
    padding: 0,
});
  
export const FollowersContainer = styled(Container) ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
});
  
export const Heading = styled(Container) ({
    backgroundColor: 'white',
    width: '100%',
    padding: '2%',
    fontSize: '40px',
    display: 'flex',
    justifyContent: 'center',
});

export const StyledCard = styled(Card)({
    width: '25%',
    padding: '1%',
    margin: '2%',
});

export const StyledCardContent = styled(Typography) ({
    padding: '1%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

export const UserAvatar = styled(Avatar) ({
    width: '60%',
    height: '60%',
})

export const FollowerAvatar = styled(Avatar) ({
    width: '30%',
    height: '30%',
})

export const StyledTypography = styled(Typography) ({
    fontSize: '18px',
    padding: '5%',
})

export const SearchContainer = styled(FormControl) ({
    backgroundColor: 'white',
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '1%',
    margin: '3%',
    outline: '1px solid'
})

