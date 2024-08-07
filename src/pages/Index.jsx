import { useState, useEffect } from "react";
import { Cat, Heart, Info, Paw, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";

const catBreeds = [
  { name: "Siamese", origin: "Thailand", temperament: "Vocal, Intelligent, Social", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
  { name: "Persian", origin: "Iran", temperament: "Gentle, Quiet, Dignified", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
  { name: "Maine Coon", origin: "United States", temperament: "Friendly, Playful, Gentle", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
  { name: "British Shorthair", origin: "United Kingdom", temperament: "Calm, Patient, Intelligent", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Britishblue.jpg" },
  { name: "Sphynx", origin: "Canada", temperament: "Energetic, Mischievous, Friendly", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg" },
];

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats can jump up to six times their length.",
];

const CatBreedCard = ({ breed }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card className="mb-4 overflow-hidden">
      <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{breed.name}</CardTitle>
        <CardDescription>Origin: {breed.origin}</CardDescription>
      </CardHeader>
      <CardContent>
        <p><strong>Temperament:</strong> {breed.temperament}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentFact, setCurrentFact] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % catFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-purple-900 text-white' : 'bg-gradient-to-b from-purple-100 to-pink-100'} p-8 transition-colors duration-500`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <motion.h1 
            className="text-5xl font-bold flex items-center justify-center text-purple-800 dark:text-purple-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Cat className="mr-2 text-pink-500" /> Feline Fascination
          </motion.h1>
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
        
        <Carousel className="mb-8">
          <CarouselContent>
            {catBreeds.map((breed, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-2xl"
                  />
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 p-2 rounded-lg">
                    <h2 className="text-2xl font-bold text-purple-800">{breed.name}</h2>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentFact}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-center leading-relaxed"
              >
                {catFacts[currentFact]}
              </motion.p>
            </AnimatePresence>
          </CardContent>
        </Card>

        <Tabs defaultValue="characteristics" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="characteristics">Feline Features</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle>Remarkable Feline Traits</CardTitle>
                <CardDescription>What makes cats truly special</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center"><Paw className="mr-2 text-pink-500" /> Exceptional hunters with razor-sharp claws and teeth</li>
                  <li className="flex items-center"><Paw className="mr-2 text-pink-500" /> Incredibly flexible bodies with lightning-fast reflexes</li>
                  <li className="flex items-center"><Paw className="mr-2 text-pink-500" /> Heightened senses, particularly acute hearing and night vision</li>
                  <li className="flex items-center"><Paw className="mr-2 text-pink-500" /> Complex communication through vocalizations, body language, and scent marking</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <div className="grid gap-4 md:grid-cols-2">
              {catBreeds.map((breed) => (
                <CatBreedCard key={breed.name} breed={breed} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-xl italic mb-4">
              "In ancient times cats were worshipped as gods; they have not forgotten this."
              <br />
              <span className="text-sm">- Terry Pratchett</span>
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setLikes(likes + 1);
                toast({
                  title: "Thanks for your love!",
                  description: `You've liked cats ${likes + 1} times.`,
                  icon: <Heart className="h-5 w-5 text-red-500" />,
                });
              }}
              className="group"
            >
              <Heart className="mr-2 h-6 w-6 group-hover:text-red-500 group-hover:fill-red-500 transition-colors" />
              Show Some Love ({likes})
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
