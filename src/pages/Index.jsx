import { useState, useEffect, useRef } from "react";
import { Cat, Heart, Info, Paw, Moon, Sun, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

const CatBreedCard = ({ breed }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="mb-4 h-[300px] perspective-1000"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transition-transform duration-500 transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <div className="absolute w-full h-full backface-hidden">
          <Card className="h-full overflow-hidden">
            <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{breed.name}</CardTitle>
              <CardDescription>Origin: {breed.origin}</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="h-full overflow-hidden flex flex-col justify-center items-center p-4">
            <CardTitle className="mb-4">{breed.name}</CardTitle>
            <p className="text-center"><strong>Temperament:</strong> {breed.temperament}</p>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CatFactTicker = ({ facts }) => {
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [facts]);

  return (
    <div className="bg-purple-800 text-white p-2 overflow-hidden">
      <motion.div
        key={currentFact}
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 10, ease: "linear" }}
        className="whitespace-nowrap"
      >
        {facts[currentFact]}
      </motion.div>
    </div>
  );
};

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats can jump up to six times their length.",
];

const CatBreedCard = ({ breed }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="mb-4 h-[300px] perspective-1000"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transition-transform duration-500 transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <div className="absolute w-full h-full backface-hidden">
          <Card className="h-full overflow-hidden">
            <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{breed.name}</CardTitle>
              <CardDescription>Origin: {breed.origin}</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="h-full overflow-hidden flex flex-col justify-center items-center p-4">
            <CardTitle className="mb-4">{breed.name}</CardTitle>
            <p className="text-center"><strong>Temperament:</strong> {breed.temperament}</p>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CatFactTicker = ({ facts }) => {
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [facts]);

  return (
    <div className="bg-purple-800 text-white p-2 overflow-hidden">
      <motion.div
        key={currentFact}
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 10, ease: "linear" }}
        className="whitespace-nowrap"
      >
        {facts[currentFact]}
      </motion.div>
    </div>
  );
};

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [catName, setCatName] = useState("");
  const { toast } = useToast();
  const headerRef = useRef(null);
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 300], [0, -150]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const catOfTheDay = catBreeds[Math.floor(Math.random() * catBreeds.length)];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-purple-900 text-white' : 'bg-gradient-to-b from-purple-100 to-pink-100'} transition-colors duration-500 cursor-paw`}>
      <CatFactTicker facts={catFacts} />
      <div className="max-w-6xl mx-auto p-8">
        <motion.div 
          ref={headerRef}
          style={{ y: headerY }}
          className="flex justify-between items-center mb-6 sticky top-0 z-10 bg-opacity-80 backdrop-blur-md p-4 rounded-lg"
        >
          <motion.h1 
            className="text-5xl font-bold flex items-center justify-center text-purple-800 dark:text-purple-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Cat className="mr-2 text-pink-500" /> Feline Fascination
          </motion.h1>
          <div className="flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Name Your Cat</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Name Your Virtual Cat</DialogTitle>
                  <DialogDescription>
                    Give your virtual feline friend a purr-fect name!
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={catName}
                      onChange={(e) => setCatName(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogTrigger asChild>
                  <Button type="submit" onClick={() => toast({
                    title: "Cat Named!",
                    description: `Your virtual cat is now named ${catName}!`,
                    icon: <Cat className="h-5 w-5 text-purple-500" />,
                  })}>Name Cat</Button>
                </DialogTrigger>
              </DialogContent>
            </Dialog>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button variant="outline" size="icon" onClick={toggleDarkMode}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDarkMode ? "moon" : "sun"}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDarkMode ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        <Carousel className="mb-8">
          <CarouselContent>
            {catBreeds.map((breed, index) => (
              <CarouselItem key={index}>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-2xl"
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 bg-white bg-opacity-75 p-2 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-purple-800">{breed.name}</h2>
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="mb-8 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Cat of the Day</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <img src={catOfTheDay.image} alt={catOfTheDay.name} className="w-24 h-24 rounded-full object-cover" />
              <div>
                <h3 className="text-xl font-semibold">{catOfTheDay.name}</h3>
                <p>{catOfTheDay.temperament}</p>
                <Badge variant="secondary" className="mt-2">{catOfTheDay.origin}</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

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
                  <motion.li className="flex items-center" whileHover={{ scale: 1.05, originX: 0 }}><Paw className="mr-2 text-pink-500" /> Exceptional hunters with razor-sharp claws and teeth</motion.li>
                  <motion.li className="flex items-center" whileHover={{ scale: 1.05, originX: 0 }}><Paw className="mr-2 text-pink-500" /> Incredibly flexible bodies with lightning-fast reflexes</motion.li>
                  <motion.li className="flex items-center" whileHover={{ scale: 1.05, originX: 0 }}><Paw className="mr-2 text-pink-500" /> Heightened senses, particularly acute hearing and night vision</motion.li>
                  <motion.li className="flex items-center" whileHover={{ scale: 1.05, originX: 0 }}><Paw className="mr-2 text-pink-500" /> Complex communication through vocalizations, body language, and scent marking</motion.li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
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
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to show your appreciation for cats!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardContent>
        </Card>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Want to learn more about cats?</h2>
          <Button
            as="a"
            href="https://en.wikipedia.org/wiki/Cat"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            Explore Cat Wiki
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
