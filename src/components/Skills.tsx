import React from "react";
import { Code2, Palette, Layout, Sparkles } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Flutter",
      "Dart",
    ],
  },
  {
    category: "UI/UX & Styling",
    icon: <Palette className="w-6 h-6" />,
    items: [
      "Tailwind CSS",
      "Responsive Design",
      "Next UI",
      "UI/UX Best Practices",
    ],
  },
  {
    category: "Tools & Workflow",
    icon: <Layout className="w-6 h-6" />,
    items: ["Git", "VS Code", "Webpack", "Vite", "npm"],
  },
  {
    category: "Additional Skills",
    icon: <Sparkles className="w-6 h-6" />,
    items: [
      "RESTful APIs",
      "Performance Optimization",
      "Web Accessibility",
      "Cross-browser Compatibility",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-600 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            GitHub Contributions
          </h3>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img
              src={`https://ghchart.rshah.org/4f46e5/siraajul`}
              alt="GitHub Contributions Graph"
              className="w-full h-auto"
            />
            <p className="text-center text-gray-600 mt-4">
              View my complete contribution history on{" "}
              <a
                href="https://github.com/siraajul"
                className="text-indigo-600 hover:text-indigo-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
