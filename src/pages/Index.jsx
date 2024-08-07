import { useState } from "react";
import { Cat, Heart, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const catBreeds = [
  { name: "Siamese", origin: "Thailand", temperament: "Vocal, Intelligent, Social" },
  { name: "Persian", origin: "Iran", temperament: "Gentle, Quiet, Dignified" },
  { name: "Maine Coon", origin: "United States", temperament: "Friendly, Playful, Gentle" },
  { name: "British Shorthair", origin: "United Kingdom", temperament: "Calm, Patient, Intelligent" },
  { name: "Sphynx", origin: "Canada", temperament: "Energetic, Mischievous, Friendly" },
];

const CatBreedCard = ({ breed }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{breed.name}</CardTitle>
      <CardDescription>Origin: {breed.origin}</CardDescription>
    </CardHeader>
    <CardContent>
      <p><strong>Temperament:</strong> {breed.temperament}</p>
    </CardContent>
  </Card>
);

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-6 flex items-center justify-center text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cat className="mr-2 text-pink-500" /> Feline Fascination
        </motion.h1>
        
        <motion.div 
          className="relative mb-8"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A cute cat"
            className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-75 p-2 rounded-full">
            <Button variant="ghost" size="icon" onClick={() => setLikes(likes + 1)}>
              <Heart className={`h-6 w-6 ${likes > 0 ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} />
            </Button>
            <Badge variant="secondary" className="ml-2">{likes}</Badge>
          </div>
        </motion.div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Cats, with their enigmatic charm and graceful demeanor, have captivated human hearts for millennia. These independent yet affectionate creatures blend the wild with the domestic, offering companionship while maintaining an air of mystery.
            </p>
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
                  <li className="flex items-center"><Info className="mr-2 text-blue-500" /> Exceptional hunters with razor-sharp claws and teeth</li>
                  <li className="flex items-center"><Info className="mr-2 text-blue-500" /> Incredibly flexible bodies with lightning-fast reflexes</li>
                  <li className="flex items-center"><Info className="mr-2 text-blue-500" /> Heightened senses, particularly acute hearing and night vision</li>
                  <li className="flex items-center"><Info className="mr-2 text-blue-500" /> Complex communication through vocalizations, body language, and scent marking</li>
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
          <CardContent className="p-6">
            <p className="text-xl text-gray-700 italic text-center">
              "In ancient times cats were worshipped as gods; they have not forgotten this."
              <br />
              <span className="text-sm">- Terry Pratchett</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
