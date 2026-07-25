import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>

      {/* Top Navbar */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">
            My Dashboard
          </Typography>
        </Toolbar>
      </AppBar>


      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          "& .MuiDrawer-paper": {
            width: 240,
            marginTop: "64px"
          }
        }}
      >
        <List>

          <ListItem>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Users" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Settings" />
          </ListItem>

        </List>
      </Drawer>


      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "64px"
        }}
      >

        <Typography variant="h4">
          Welcome Back 👋
        </Typography>


        {/* Cards */}
        <Grid container spacing={3} mt={2}>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography>
                  Total Users
                </Typography>

                <Typography variant="h4">
                  120
                </Typography>
              </CardContent>
            </Card>
          </Grid>


          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography>
                  Sales
                </Typography>

                <Typography variant="h4">
                  $5000
                </Typography>
              </CardContent>
            </Card>
          </Grid>


          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography>
                  Orders
                </Typography>

                <Typography variant="h4">
                  80
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>

      </Box>

    </Box>
  );
}

export default Dashboard;