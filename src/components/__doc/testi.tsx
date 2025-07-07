import {
  Avatar,
  Group,
  Paper,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import classes from "../components/css/Testi.module.css";

export default function Testi() {
  return (
    <div>
      <div>
        <Title
          order={2}
          className={classes.title}
          style={{ textAlign: "center", marginTop: "1rem" }}
        >
          Integrate effortlessly with any technology stack
        </Title>
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Every once in a while, you’ll see a Golbat that’s missing some fangs.
          This happens when hunger drives it to try biting a Steel-type Pokémon.
        </Text>
      </div>

      <div className="container flex flex-col gap-10 p-10 justify-center items-center content-center ">
        <Paper withBorder radius="md" className={classes.comment}>
          <Group>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
              alt="Jacob Warnhalter"
              radius="xl"
            />
            <div>
              <Text fz="sm">Jacob Warnhalter</Text>
              <Text fz="xs" c="dimmed">
                10 minutes ago
              </Text>
            </div>
          </Group>
          <TypographyStylesProvider className={classes.body}>
            <div
              className={classes.content}
              dangerouslySetInnerHTML={{
                __html:
                  '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
              }}
            />
          </TypographyStylesProvider>
        </Paper>

        <Paper withBorder radius="md" className={classes.comment}>
          <Group>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
              alt="Jacob Warnhalter"
              radius="xl"
            />
            <div>
              <Text fz="sm">Jacob Warnhalter</Text>
              <Text fz="xs" c="dimmed">
                10 minutes ago
              </Text>
            </div>
          </Group>
          <TypographyStylesProvider className={classes.body}>
            <div
              className={classes.content}
              dangerouslySetInnerHTML={{
                __html:
                  '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
              }}
            />
          </TypographyStylesProvider>
        </Paper>

        <Paper withBorder radius="md" className={classes.comment}>
          <Group>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
              alt="Jacob Warnhalter"
              radius="xl"
            />
            <div>
              <Text fz="sm">Jacob Warnhalter</Text>
              <Text fz="xs" c="dimmed">
                10 minutes ago
              </Text>
            </div>
          </Group>
          <TypographyStylesProvider className={classes.body}>
            <div
              className={classes.content}
              dangerouslySetInnerHTML={{
                __html:
                  '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
              }}
            />
          </TypographyStylesProvider>
        </Paper>

        <Paper withBorder radius="md" className={classes.comment}>
          <Group>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
              alt="Jacob Warnhalter"
              radius="xl"
            />
            <div>
              <Text fz="sm">Jacob Warnhalter</Text>
              <Text fz="xs" c="dimmed">
                10 minutes ago
              </Text>
            </div>
          </Group>
          <TypographyStylesProvider className={classes.body}>
            <div
              className={classes.content}
              dangerouslySetInnerHTML={{
                __html:
                  '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
              }}
            />
          </TypographyStylesProvider>
        </Paper>
      </div>
    </div>
  );
}
