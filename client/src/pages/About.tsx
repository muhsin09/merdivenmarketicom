import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-accent via-background to-background">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {t("about.pageTitle")}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("about.pageDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">{t("about.storyTitle")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.story1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.story2")}
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <div className="text-sm text-muted-foreground">{t("about.yearsExperience")}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">8</div>
                    <div className="text-sm text-muted-foreground">{t("about.differentModels")}</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/products/TopluUrunlerDikey2.jpg" 
                    alt={t("about.altImage")} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{t("about.missionTitle")}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("about.missionDescription")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{t("about.visionTitle")}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("about.visionDescription")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t("about.valuesTitle")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("about.valuesDescription")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("about.value1Title")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("about.value1Description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("about.value2Title")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("about.value2Description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("about.value3Title")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("about.value3Description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary/50 transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("about.value4Title")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("about.value4Description")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

