import { Helmet, HelmetProvider } from "react-helmet-async";
import "../../features/certification/certification.css";
import HyperText from "../../components/ui/hyper-text";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import { Badge } from "../../components/ui/badge";
import { ArrowUp, Check, X } from "lucide-react";
import { fetchLeetCodeStats } from "../../services/apiLeetCode";

function leetcode() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchLeetCodeStats("shubhamsharma2003");
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Shubham Sharma | LeetCode Stats</title>
      </Helmet>
      <div className="bg-mainBg p-8">
        <div className="mb-5 flex flex-col items-center gap-x-10 xl:flex-row">
          <div>
            <HyperText
              className="pb-5 text-3xl text-white"
              text="LeetCode Statistics"
            />
          </div>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 p-4 bg-red-100 rounded-lg">{error}</div>
        ) : (
          <div className="container mx-auto p-4 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">LeetCode Stats</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-blue-500 text-white">
                  <CardTitle className="text-2xl">Overall Progress</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total Solved</span>
                    <span className="text-3xl font-bold text-blue-600">{data.totalSolved}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Ranking</span>
                    <div className="flex items-center">
                      <ArrowUp className="text-green-500 mr-2" />
                      <span className="text-3xl font-bold text-green-600">{data.ranking}</span>
                    </div>
                  </div>
                  <Progress value={(data.totalSolved / data.totalQuestions) * 100} className="h-3 mt-2" />
                  <p className="text-right mt-2 text-sm text-gray-600">
                    {((data.totalSolved / data.totalQuestions) * 100).toFixed(1)}% Complete
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-purple-500 text-white">
                  <CardTitle className="text-2xl">Difficulty Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  {[
                    { label: "Easy", solved: data.easySolved, total: data.totalEasy, color: "bg-green-500" },
                    { label: "Medium", solved: data.mediumSolved, total: data.totalMedium, color: "bg-yellow-500" },
                    { label: "Hard", solved: data.hardSolved, total: data.totalHard, color: "bg-red-500" },
                  ].map((difficulty) => (
                    <div key={difficulty.label} className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold">{difficulty.label}</span>
                        <span className="text-lg font-bold">
                          {difficulty.solved} / {difficulty.total}
                        </span>
                      </div>
                      <Progress value={(difficulty.solved / difficulty.total) * 100} className={`h-3 ${difficulty.color}`} />
                      <p className="text-right mt-1 text-sm text-gray-600">
                        {((difficulty.solved / difficulty.total) * 100).toFixed(1)}% Complete
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-indigo-500 text-white">
                  <CardTitle className="text-2xl">Recent Submissions</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {data.recentSubmissions.slice(0, 5).map((submission, index) => (
                      <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium truncate flex-1 mr-2">{submission.title}</span>
                        <Badge variant={submission.statusDisplay === "Accepted" ? "success" : "destructive"}>
                          {submission.statusDisplay === "Accepted" ? (
                            <Check className="w-4 h-4 mr-1" />
                          ) : (
                            <X className="w-4 h-4 mr-1" />
                          )}
                          {submission.statusDisplay}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </HelmetProvider>
  );
}

export default leetcode;
