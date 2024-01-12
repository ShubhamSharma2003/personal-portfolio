import RepoCard from "./RepoCard";
import ActivityCalendar from "react-github-calendar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { getUser } from "../../services/apiGithub";
import { useLoaderData } from "react-router";

function Github() {
  const [user, repos] = useLoaderData();
  const repoInfo = repos.filter((r) => r.stargazers_count > 0);
  const theme = {
    dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Shubham Sharma | Github</title>
      </Helmet>
      <div className="space-y-8 bg-mainBg p-4 md:p-8">
        <div className="flex h-24 max-w-full items-center justify-center gap-x-5 divide-x-2 divide-white  rounded-lg bg-articleBg animate-in fade-in zoom-in delay-0 duration-1000">
          <div className="flex items-center justify-center gap-x-2 divide-x-2 divide-white ">
            <span>
              <img
                width={60}
                height={60}
                className="  rounded-full"
                src={user ? user.avatar_url : "Not found"}
                alt=""
              />
            </span>
            <h2 className="pl-2 text-lg font-medium text-white md:text-2xl">
              {user.login}
            </h2>
          </div>
          <div className="pl-2 ">
            <h2 className=" text-lg  font-medium text-accentColor md:text-2xl">
              {user ? user.public_repos : 20} Repos
            </h2>
          </div>
          <div className="hidden pl-2 text-textColor md:block ">
            <h2 className="md:text-2xl">
              {user ? user.bio : "I love writing frontend."}
            </h2>
          </div>
        </div>
        <div className="grid gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-4 animate-in fade-in zoom-in delay-0 duration-1000">
          {repoInfo &&
            repoInfo.map((r) => {
              return (
                <RepoCard
                  key={r.id}
                  name={r.name}
                  desc={r.description}
                  url={r.html_url}
                  homepage={r.homepage}
                />
              );
            })}
        </div>
        <div className="h-full w-full text-textColor animate-in fade-in zoom-in delay-0 duration-1000">
          <ActivityCalendar
            username="ShubhamSharma2003"
            fontSize={17}
            theme={theme}
            hideColorLegend
            hideMonthLabels
          />
        </div>
      </div>
    </HelmetProvider>
  );
}

export async function loader() {
  const github = getUser();
  return github;
}

export default Github;
