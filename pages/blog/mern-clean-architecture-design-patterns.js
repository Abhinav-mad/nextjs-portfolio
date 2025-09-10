/* eslint-disable react/no-unescaped-entities */
// pages/blog/clean-architecture.js
import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Text,
  Code,
  Divider,
  UnorderedList,
  OrderedList,
  ListItem,
  VStack,
  HStack,
  Flex,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

/**
 * Long-form article page:
 * - full text (polished grammar, not shortened)
 * - Chakra UI layout
 * - SEO tags + JSON-LD
 * - Floating Table of Contents (TOC)
 *
 * Paste into pages/blog/clean-architecture.js
 */

const canonical =
  "https://abhinavs-dev-canvas.netlify.app/blog/mern-clean-architecture-design-patterns";

export default function CleanArchitectureBlog() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const codeBg = useColorModeValue("gray.100", "gray.800");

  const headings = [
    { id: "introduction", label: "Introduction" },
    { id: "why-architecture-matters", label: "Why Architecture Matters" },
    {
      id: "architectural-patterns",
      label: "Architectural Patterns & Principles",
    },
    { id: "file-structure", label: "File Structure (Blueprint)" },
    { id: "todo-structure", label: "Todo App Structure" },
    { id: "deep-dive", label: "Deep Dive: Analyze the Todo App" },
    { id: "backend-domain", label: "Backend - Domain Layer" },
    {
      id: "backend-application",
      label: "Backend - Application Layer (Use Cases)",
    },
    {
      id: "backend-infrastructure",
      label: "Backend - Infrastructure (Repo Impl)",
    },
    {
      id: "backend-interfaces",
      label: "Backend - Interface Layer (Controllers)",
    },
    { id: "frontend-architecture", label: "Frontend Architecture" },
    { id: "design-patterns", label: "Key Design Patterns in Action" },
    { id: "validation", label: "Validation at the Edge" },
    { id: "security", label: "Security Considerations" },
    { id: "testing", label: "Testing Strategy" },
    { id: "dx", label: "Development Experience (DX)" },
    { id: "migration", label: "When to Evolve (Advanced Patterns)" },
    { id: "conclusion", label: "Conclusion" },
    { id: "resources", label: "Additional Resources" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Crafting Robust MERN Applications: Architecture & Design Patterns",
    description:
      "A long-form guide to structuring MERN apps using Clean Architecture, Repository Pattern, Use Cases, validation, auth, tests and production-grade best practices — explained with a Todo app example.",
    author: { "@type": "Person", name: "Abhinav" },
    publisher: { "@type": "Organization", name: "Abhinav.dev" },
    url: canonical,
    datePublished: "2025-09-06",
  };

  return (
    <>
      <Head>
        <title>
          How to Create Good Software Architecture: Best Practices, Clean
          Architecture & MERN Example
        </title>
        <meta
          name="description"
          content="Long-form guide showing how to structure MERN apps using Clean Architecture, Repository Pattern, Use Cases, validation, auth, testing and production-grade best practices — illustrated with a Todo app example."
        />
        <meta
          name="keywords"
          content="how to create good software architecture, best software architecture, clean architecture MERN, design patterns, software best practices, repository pattern, use cases, Node.js architecture, React architecture"
        />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Crafting Robust MERN Applications: Architecture & Design Patterns"
        />
        <meta
          property="og:description"
          content="Step-by-step guide to creating good software architecture with Clean Architecture principles, design patterns, and a MERN Todo app example."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Crafting Robust MERN Applications: Architecture & Design Patterns"
        />
        <meta
          name="twitter:description"
          content="A comprehensive, practical guide to building maintainable MERN applications with real code examples."
        />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Box bg={bg} minH="100vh" pb={12}>
        <Container maxW="1200px" py={12}>
          <Flex gap={8} align="flex-start">
            {/* Main column */}
            <Box flex="1" minW={0} px={{ base: 0, md: 4 }}>
              <VStack align="stretch" spacing={8}>
                <Heading as="h1" size="2xl">
                  Crafting Robust MERN Applications: A Guide to Modern Software
                  Architecture with Todo App Example
                </Heading>

                {/* Introduction */}
                <Box id="introduction">
                  <Text fontSize="lg" mb={4}>
                    In the world of software development, good architecture
                    isn't a luxury — it's a necessity. As applications grow in
                    complexity, having a solid architectural foundation becomes
                    the difference between a maintainable, scalable codebase and
                    a tangled mess that's painful to work with.
                  </Text>

                  <Text mb={4}>
                    In this comprehensive guide, we'll explore how to structure
                    your applications using proven design patterns and
                    architectural principles. We'll use a Todo application built
                    with Node.js, React, and TypeScript as our running example
                    to demonstrate these concepts in practice.
                  </Text>
                  <Text mb={3}>Read this page to learn:</Text>
                  <UnorderedList mb={4}>
                    <ListItem>
                      Which responsibilities belong in which folder
                    </ListItem>
                    <ListItem>
                      How to separate concerns into testable units
                    </ListItem>
                    <ListItem>
                      Which patterns to use (and when) with concrete examples
                    </ListItem>
                    <ListItem>
                      Practical coding standards and a quick checklist to follow
                    </ListItem>
                  </UnorderedList>

                  <Text>
                    The aim is pragmatic: start with a small, well-organized
                    structure and evolve it as needs grow. Throughout the
                    article you'll find short, actionable recommendations you
                    can copy into your projects.
                  </Text>
                   <Text mb={4} fontWeight="bold">
                    For reference, you can view the full Todo app on{" "}
                    <Link
                      href="https://github.com/Abhinav-mad/todo-clean-architecture/tree/master/clean-todo"
                      color="blue.500"
                      isExternal
                    >
                      GitHub
                    </Link>
                    .
                  </Text>
                </Box>

                <Divider />

                {/* Why Architecture */}
                <Box id="why-architecture-matters">
                  <Heading as="h2" size="xl" mb={4}>
                    Why Architecture Matters
                  </Heading>
                  <Text mb={4}>
                    Before diving into specifics, let's clarify why architecture
                    is crucial:
                  </Text>
                  <UnorderedList spacing={2} mb={4}>
                    <ListItem>
                      Maintainability — Well-structured code is easier to
                      understand, modify, and debug.
                    </ListItem>
                    <ListItem>
                      Scalability — Good architecture allows your application to
                      grow without becoming unmanageable.
                    </ListItem>
                    <ListItem>
                      Testability — Proper separation of concerns makes testing
                      straightforward.
                    </ListItem>
                    <ListItem>
                      Team Collaboration — Clear structure helps multiple
                      developers work effectively together.
                    </ListItem>
                    <ListItem>
                      Long-term Viability — Applications with good architecture
                      have longer lifespans and lower maintenance costs.
                    </ListItem>
                  </UnorderedList>
                </Box>

                <Divider />

                {/* Architectural Patterns */}
                <Box id="architectural-patterns">
                  <Heading as="h2" size="xl" mb={4}>
                    Architectural Patterns & Principles
                  </Heading>

                  <Heading as="h3" size="lg" mb={2}>
                    Clean Architecture
                  </Heading>
                  <Text mb={3}>
                    Inspired by Robert C. Martin's Clean Architecture, this
                    approach emphasizes separation of concerns and dependency
                    inversion. The main idea is to organize code in concentric
                    layers with dependencies pointing inward: domain,
                    application, infrastructure, and interfaces. This keeps your
                    core business rules isolated from frameworks and external
                    services. see the GeeksforGeeks overview:{" "}
                    <Link
                      href="https://www.geeksforgeeks.org/system-design/complete-guide-to-clean-architecture/"
                      isExternal
                      color="blue.500"
                    >
                      GeeksforGeeks — Complete Guide to Clean Architecture
                    </Link>
                    .
                  </Text>

                  <UnorderedList mb={4} spacing={2}>
                    <ListItem>Independent of frameworks</ListItem>
                    <ListItem>Testable</ListItem>
                    <ListItem>Independent of UI</ListItem>
                    <ListItem>Independent of database</ListItem>
                    <ListItem>Independent of any external agency</ListItem>
                  </UnorderedList>

                  <Heading as="h3" size="lg" mb={2}>
                    Repository Pattern
                  </Heading>
                  <Text mb={3}>
                    This pattern abstracts data access, allowing you to switch
                    data sources without affecting your business logic. The
                    application interacts with repository interfaces, not
                    database-specific APIs.
                  </Text>

                  <Heading as="h3" size="lg" mb={2}>
                    Use Case Pattern
                  </Heading>
                  <Text mb={3}>
                    Each business operation is encapsulated in a dedicated class
                    or function (a "use case") with a single entry method
                    (commonly <Code>execute()</Code>). This provides clear
                    boundaries for application functionality, making it easy to
                    test and reason about.
                  </Text>
                </Box>

                {/* Research-backed findings */}
                <Box id="research-findings" mt={6}>
                  <Heading as="h3" size="lg" mb={3}>
                    Research‑backed findings & practical takeaways
                  </Heading>
                  <Text mb={3}>
                    Over the last decade of industry writing and case studies,
                    several consistent outcomes appear when teams adopt the
                    separation-of-concerns patterns described above:
                  </Text>
                  <UnorderedList mb={3}>
                    <ListItem>
                      Smaller modules and explicit interfaces reduce cognitive
                      load and speed onboarding.
                    </ListItem>
                    <ListItem>
                      Isolating side-effects (DB, network) into repositories and
                      adapters makes business logic easier to test and reason
                      about.
                    </ListItem>
                    <ListItem>
                      Keeping controllers thin and putting rules into use-cases
                      reduces accidental coupling with web frameworks and
                      simplifies porting to new transports.
                    </ListItem>
                    <ListItem>
                      Early validation at the boundary (Zod/Joi) greatly reduces
                      the classes of bugs that reach the core domain.
                    </ListItem>
                  </UnorderedList>
                  <Text mb={3}>
                    Practical takeaway: when in doubt, extract a tiny interface
                    and a focused test for the behavior you want to preserve.
                    Prefer small, well-named modules over one large file that
                    tries to do everything.
                  </Text>
                </Box>

                <Divider />

                {/* File Structure */}
                <Box id="file-structure">
                  <Heading as="h2" size="xl" mb={4}>
                    File Structure for a Well-Architected Application
                  </Heading>

                  <Text mb={3}>
                    Below is an ideal folder structure for a full-stack MERN
                    application. It separates concerns into layers so each part
                    of the system has a clear responsibility.
                  </Text>
                  <Box
                    as="pre"
                    whiteSpace="pre-wrap"
                    wordBreak="break-word"
                    overflowX="auto"
                    maxW="100%"
                    p={4}
                    borderRadius="md"
                    bg="gray.900"
                    color="white"
                  >
                    <Code
                      display="block"
                      whiteSpace="pre"
                      p={4}
                      mb={4}
                      bg={codeBg}
                      minW="max-content"
                    >
                      {`src/
├── domain/           # Enterprise-wide business rules
│   ├── entities/     # Business objects
│   └── types/        # Type definitions
├── application/      # Application-specific business rules
│   ├── use-cases/    # Application operations
│   └── services/     # Domain services
├── infrastructure/   # Framework & driver details
│   ├── database/     # DB connections, models, repos
│   ├── auth/         # Authentication strategies
│   └── logging/      # Logging implementation
└── interfaces/       # Adapters for external systems
    ├── http/         # Web controllers, routes, middleware
    ├── react/        # React components & hooks
    └── cli/          # Command-line interface`}
                    </Code>
                  </Box>
                  <Text mb={3}>
                    The goal here is repeatability: a developer who understands
                    one module can quickly grasp others because the pattern
                    repeats consistently across features.
                  </Text>
                </Box>

                <Divider />

                {/* Todo App Structure */}
                <Box id="todo-structure">
                  <Heading as="h2" size="xl" mb={4}>
                    How This Applies to the Todo App (Concrete Example)
                  </Heading>

                  <Text mb={3}>
                    Here is how the Todo application maps to the recommended
                    structure.
                  </Text>
                  <Text mb={4} fontWeight="bold">
                    For reference, you can view the full Todo app on{" "}
                    <Link
                      href="https://github.com/Abhinav-mad/todo-clean-architecture/tree/master/clean-todo"
                      color="blue.500"
                      isExternal
                    >
                      GitHub
                    </Link>
                    .
                  </Text>

                  <Code
                    display="block"
                    whiteSpace="pre"
                    p={4}
                    mb={4}
                    bg={codeBg}
                  >
                    {`todo-app/
├── backend/
│   ├── src/
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   │   ├── Todo.ts
│   │   │   │   └── User.ts
│   │   │   └── types/
│   │   ├── application/
│   │   │   ├── use-cases/
│   │   │   │   ├── CreateTodo.ts
│   │   │   │   ├── UpdateTodo.ts
│   │   │   │   ├── DeleteTodo.ts
│   │   │   │   └── GetTodos.ts
│   │   │   └── services/
│   │   │       └── AuthService.ts
│   │   ├── infrastructure/
│   │   │   ├── database/
│   │   │   │   ├── connection.ts
│   │   │   │   ├── models/
│   │   │   │   │   ├── TodoModel.ts
│   │   │   │   │   └── UserModel.ts
│   │   │   │   └── repositories/
│   │   │   │       ├── TodoRepository.ts
│   │   │   │       └── UserRepository.ts
│   │   │   ├── auth/
│   │   │   │   ├── jwt.ts
│   │   │   │   └── middleware.ts
│   │   │   └── logging/
│   │   │       └── logger.ts
│   │   └── interfaces/
│   │       ├── http/
│   │       │   ├── controllers/
│   │       │   │   ├── TodoController.ts
│   │       │   │   └── AuthController.ts
│   │       │   ├── routes/
│   │       │   │   ├── todo.ts
│   │       │   │   └── auth.ts
│   │       │   └── middleware/
│   │       │       ├── validation.ts
│   │       │       └── requireAuth.ts
│   │       └── cli/
│   │           └── commands.ts
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── src/
    │   ├── domain/
    │   │   └── types/
    │   ├── application/
    │   │   └── services/
    │   ├── infrastructure/
    │   │   └── http/
    │   │       └── apiClient.ts
    │   └── interfaces/
    │       └── react/
    │           ├── components/
    │           │   ├── TodoForm.tsx
    │           │   ├── TodoList.tsx
    │           │   └── TodoItem.tsx
    │           ├── hooks/
    │           │   ├── useAuth.ts
    │           │   └── useTodos.ts
    │           ├── pages/
    │           │   ├── Login.tsx
    │           │   └── Dashboard.tsx
    │           └── stores/
    │               └── authStore.ts`}
                  </Code>
                </Box>

                <Divider />

                {/* Deep Dive */}
                <Box id="deep-dive">
                  <Heading as="h2" size="xl" mb={4}>
                    Deep Dive: Analyzing the Todo App Architecture
                  </Heading>

                  <Text mb={3}>
                    Let’s step through how the example implements the
                    architectural principles we’ve discussed.
                  </Text>
                                    <Text mb={4} fontWeight="bold">
                    For reference, you can view the full Todo app on{" "}
                    <Link
                      href="https://github.com/Abhinav-mad/todo-clean-architecture/tree/master/clean-todo"
                      color="blue.500"
                      isExternal
                    >
                      GitHub
                    </Link>
                    .
                  </Text>
                </Box>

                {/* Backend - Domain */}
                <Box id="backend-domain">
                  <Heading as="h3" size="lg" mb={3}>
                    Backend — Domain Layer
                  </Heading>

                  <Text mb={3}>
                    The domain layer holds business entities and types. Entities
                    are small, focused, and devoid of framework or persistence
                    code.
                  </Text>

                  <Code
                    display="block"
                    whiteSpace="pre"
                    p={4}
                    mb={4}
                    bg={codeBg}
                    minW="max-content"
                  >
                    {`// domain/entities/Todo.ts
export interface Todo {
  id?: string;
  _id?: string;
  title: string;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// domain/entities/User.ts
export interface User {
  id?: string;
  _id?: string;
  email: string;
  name: string;
  password: string;
  createdAt?: Date;
}`}
                  </Code>
                </Box>

                {/* Backend - Application */}
                <Box id="backend-application">
                  <Heading as="h3" size="lg" mb={3}>
                    Backend — Application Layer (Use Cases)
                  </Heading>

                  <Text mb={3}>
                    Use cases encapsulate business operations. They accept
                    inputs (DTOs or primitives), perform domain logic, and
                    interact with repositories or domain services.
                  </Text>
                  <Box
                    as="pre"
                    whiteSpace="pre-wrap"
                    wordBreak="break-word"
                    overflowX="auto"
                    maxW="100%"
                    p={4}
                    borderRadius="md"
                    bg="gray.900"
                    color="white"
                  >
                    <Code
                      display="block"
                      whiteSpace="pre"
                      p={4}
                      mb={4}
                      bg={codeBg}
                      minW="max-content"
                    >
                      {`// application/use-cases/CreateTodo.ts
export class CreateTodo {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(title: string, userId: string): Promise<Todo> {
    if (!title.trim()) {
      throw new Error('Title cannot be empty');
    }
    
    const todo = await this.todoRepository.create({
      title,
      completed: false,
      userId
    });
    
    return todo;
  }
}`}
                    </Code>
                  </Box>
                </Box>

                {/* Backend - Infrastructure */}
                <Box id="backend-infrastructure">
                  <Heading as="h3" size="lg" mb={3}>
                    Backend — Infrastructure (Repository Implementation)
                  </Heading>

                  <Text mb={3}>
                    Repositories wrap persistence technology (Mongoose models in
                    this case). The rest of the app depends only on repository
                    interfaces, not Mongoose directly.
                  </Text>
                  <Box
                    as="pre"
                    whiteSpace="pre-wrap"
                    wordBreak="break-word"
                    overflowX="auto"
                    maxW="100%"
                    p={4}
                    borderRadius="md"
                    bg="gray.900"
                    color="white"
                  >
                    <Code
                      display="block"
                      whiteSpace="pre"
                      p={4}
                      mb={4}
                      bg={codeBg}
                      minW="max-content"
                    >
                      {`// infrastructure/database/repositories/TodoRepository.ts
export class TodoRepository implements ITodoRepository {
  constructor(private todoModel: Model<ITodo>) {}
  
  async create(todoData: Partial<Todo>): Promise<Todo> {
    const todo = new this.todoModel(todoData);
    return await todo.save();
  }
  
  async findById(id: string): Promise<Todo | null> {
    return this.todoModel.findById(id);
  }
  
  // Other data access methods...
}`}
                    </Code>
                  </Box>
                </Box>

                {/* Backend - Interfaces */}
                <Box id="backend-interfaces">
                  <Heading as="h3" size="lg" mb={3}>
                    Backend — Interface Layer (HTTP Controllers)
                  </Heading>

                  <Text mb={3}>
                    Controllers translate HTTP requests into use-case inputs and
                    send responses. They remain thin and delegate business logic
                    to the application layer.
                  </Text>
                  <Box
                    as="pre"
                    whiteSpace="pre-wrap"
                    wordBreak="break-word"
                    overflowX="auto"
                    maxW="100%"
                    p={4}
                    borderRadius="md"
                    bg="gray.900"
                    color="white"
                  >
                    <Code
                      display="block"
                      whiteSpace="pre"
                      p={4}
                      mb={4}
                      bg={codeBg}
                      minW="max-content"
                    >
                      {`// interfaces/http/controllers/TodoController.ts
export class TodoController {
  constructor(
    private createTodo: CreateTodo,
    private updateTodo: UpdateTodo,
    private deleteTodo: DeleteTodo,
    private getTodos: GetTodos
  ) {}
  
  async create(req: Request, res: Response) {
    try {
      const { title } = req.body;
      const userId = req.user.id;
      
      const todo = await this.createTodo.execute(title, userId);
      res.status(201).json(todo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  // Other controller methods...
}`}
                    </Code>
                  </Box>
                </Box>

                <Divider />

                {/* Frontend Architecture */}
                <Box id="frontend-architecture">
                  <Heading as="h2" size="xl" mb={4}>
                    Frontend Architecture
                  </Heading>

                  <Text mb={3}>
                    The frontend mirrors these separation-of-concerns ideas.
                    Domain types and application services live apart from React
                    components. Components consume services via hooks, keeping
                    UI concerns isolated from business logic.
                  </Text>
                  <Box
                    as="pre"
                    whiteSpace="pre-wrap"
                    wordBreak="break-word"
                    overflowX="auto"
                    maxW="100%"
                    p={4}
                    borderRadius="md"
                    bg="gray.900"
                    color="white"
                  >
                    <Code
                      display="block"
                      whiteSpace="pre"
                      p={4}
                      mb={4}
                      bg={codeBg}
                      minW="max-content"
                    >
                      {`// application/services/todoService.ts
export class TodoService {
  constructor(private apiClient: ApiClient) {}
  
  async getTodos(): Promise<Todo[]> {
    return this.apiClient.get('/todos');
  }
  
  async createTodo(title: string): Promise<Todo> {
    return this.apiClient.post('/todos', { title });
  }
  
  async updateTodo(id: string, updates: Partial<Todo>): Promise<Todo> {
    return this.apiClient.patch(\`/todos/\${id}\`, updates);
  }
  
  async deleteTodo(id: string): Promise<void> {
    return this.apiClient.delete(\`/todos/\${id}\`);
  }
}`}
                    </Code>

                    <Code
                      display="block"
                      whiteSpace="pre"
                      p={4}
                      mb={4}
                      bg={codeBg}
                      minW="max-content"
                    >
                      {`// interfaces/react/hooks/useTodos.ts
export const useTodos = () => {
  const [items, setItems] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const todoService = useTodoService();
  
  useEffect(() => {
    loadTodos();
  }, []);
  
  const loadTodos = async () => {
    try {
      const todos = await todoService.getTodos();
      setItems(todos);
    } catch (error) {
      console.error('Failed to load todos:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const add = async (title: string) => {
    const todo = await todoService.createTodo(title);
    setItems(prev => [todo, ...prev]);
  };
  
  const toggle = async (id: string, completed: boolean) => {
    const updated = await todoService.updateTodo(id, { completed });
    setItems(prev => prev.map(t => (t.id === id || t._id === id ? updated : t)));
  };
  
  const removeItem = async (id: string) => {
    await todoService.deleteTodo(id);
    setItems(prev => prev.filter(t => t.id !== id && t._id !== id));
  };
  
  return {
    items,
    loading,
    add,
    toggle,
    removeItem
  };
};`}
                    </Code>
                  </Box>
                </Box>

                {/* Coding Standards */}
                <Box id="coding-standards">
                  <Heading as="h3" size="lg" mb={3}>
                    Coding standards — concrete rules you can copy
                  </Heading>
                  <Text mb={3}>
                    Small, concrete rules reduce debates and improve code
                    quality. Copy these into your team guide or lint rules.
                  </Text>
                  <UnorderedList mb={3}>
                    <ListItem>
                      TypeScript: enable "strict" and prefer explicit return
                      types on public functions.
                    </ListItem>
                    <ListItem>
                      Files: keep <Code>~200</Code> lines max and one default
                      export per file where it makes sense.
                    </ListItem>
                    <ListItem>
                      Errors: throw domain-specific errors (BadRequestError,
                      NotFoundError) and map them to HTTP responses in one
                      place.
                    </ListItem>
                    <ListItem>
                      Naming: use <Code>kebab-case</Code> for files and folders,{" "}
                      <Code>PascalCase</Code> for types/classes,{" "}
                      <Code>camelCase</Code> for functions.
                    </ListItem>
                    <ListItem>
                      Formatting: run Prettier on save and disallow console.log
                      in production code (use structured logger).
                    </ListItem>
                  </UnorderedList>
                  <Text fontSize="sm" color="gray.500">
                    These rules are intentionally opinionated — pick what fits
                    your team and be consistent.
                  </Text>
                </Box>

                <Divider />

                {/* Patterns in Action */}
                <Box id="design-patterns">
                  <Heading as="h2" size="xl" mb={4}>
                    Key Design Patterns in Action
                  </Heading>

                  <Heading as="h3" size="md" mb={2}>
                    1. Dependency Injection
                  </Heading>
                  <Text mb={3}>
                    The app uses simple wiring (a "composition root") where
                    repositories are created and passed into use-cases, which
                    are then passed into controllers. This decouples module
                    construction from application logic.
                  </Text>

                  <Heading as="h3" size="md" mb={2}>
                    2. Repository Pattern
                  </Heading>
                  <Text mb={3}>
                    Repositories define an interface for data operations.
                    Use-cases depend on these interfaces instead of concrete
                    database implementations.
                  </Text>

                  <Heading as="h3" size="md" mb={2}>
                    3. Composition Over Inheritance
                  </Heading>
                  <Text mb={3}>
                    React components are composed from small, focused components
                    rather than using inheritance, promoting reuse and
                    testability.
                  </Text>
                </Box>

                <Divider />

                {/* Validation */}
                <Box id="validation">
                  <Heading as="h2" size="xl" mb={4}>
                    Validation at the Edge
                  </Heading>

                  <Text mb={3}>
                    Use Zod (or similar) to validate requests at the HTTP
                    boundary. That keeps domain code free of parsing concerns
                    and allows clear error responses early.
                  </Text>
                  <Box
                    as="pre"
                    whiteSpace="pre-wrap"
                    wordBreak="break-word"
                    overflowX="auto"
                    maxW="100%"
                    p={4}
                    borderRadius="md"
                    bg="gray.900"
                    color="white"
                  >
                    <Code
                      display="block"
                      whiteSpace="pre"
                      p={4}
                      mb={4}
                      bg={codeBg}
                      minW="max-content"
                    >
                      {`// interfaces/http/middleware/validation.ts
import { z } from 'zod';

export const validate = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      res.status(400).json({ error: 'Invalid input', details: error.errors });
    }
  };
};

// Todo creation schema
export const createTodoSchema = z.object({
  title: z.string().min(1).max(255),
});`}
                    </Code>
                  </Box>
                </Box>

                <Divider />

                {/* Security */}
                <Box id="security">
                  <Heading as="h2" size="xl" mb={4}>
                    Security Considerations
                  </Heading>

                  <Text mb={3}>
                    The application follows core security best practices:
                  </Text>
                  <UnorderedList mb={3}>
                    <ListItem>
                      JWT Authentication: secure token-based authentication with
                      sensible expirations.
                    </ListItem>
                    <ListItem>
                      Password Hashing: async bcrypt hashing to avoid blocking
                      the event loop.
                    </ListItem>
                    <ListItem>
                      Input Validation at the edge to avoid injection and
                      malformed data.
                    </ListItem>
                    <ListItem>HTTP Security Headers via Helmet.js.</ListItem>
                    <ListItem>
                      Careful CORS configuration to restrict origins.
                    </ListItem>
                  </UnorderedList>
                  <Box
                    as="pre"
                    whiteSpace="pre-wrap"
                    wordBreak="break-word"
                    overflowX="auto"
                    maxW="100%"
                    p={4}
                    borderRadius="md"
                    bg="gray.900"
                    color="white"
                  >
                    <Code
                      display="block"
                      whiteSpace="pre"
                      p={4}
                      mb={4}
                      bg={codeBg}
                      minW="max-content"
                    >
                      {`// infrastructure/auth/jwt.ts
export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

export const verifyToken = (token: string): { userId: string } => {
  return jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
};`}
                    </Code>
                  </Box>
                </Box>

                <Divider />

                {/* Testing */}
                <Box id="testing">
                  <Heading as="h2" size="xl" mb={4}>
                    Testing Strategy
                  </Heading>

                  <Text mb={3}>
                    A well-architected system is inherently testable.
                    Recommended approach:
                  </Text>

                  <UnorderedList mb={4}>
                    <ListItem>
                      <strong>Unit:</strong> Test use-cases with in-memory or
                      mock repositories to get fast feedback.
                    </ListItem>
                    <ListItem>
                      <strong>Integration:</strong> Test Express routes with
                      Supertest covering schemas, controllers and real repos or
                      test DB.
                    </ListItem>
                    <ListItem>
                      <strong>UI:</strong> Use React Testing Library for
                      component behavior and MSW for API mocking.
                    </ListItem>
                  </UnorderedList>
                  <Box
                    as="pre"
                    whiteSpace="pre-wrap"
                    wordBreak="break-word"
                    overflowX="auto"
                    maxW="100%"
                    p={4}
                    borderRadius="md"
                    bg="gray.900"
                    color="white"
                  >
                    <Code
                      display="block"
                      whiteSpace="pre"
                      p={4}
                      mb={4}
                      bg={codeBg}
                      minW="max-content"
                    >
                      {`// tests/application/use-cases/CreateTodo.spec.ts
describe('CreateTodo', () => {
  let createTodo: CreateTodo;
  let mockTodoRepository: jest.Mocked<ITodoRepository>;
  beforeEach(() => {
    mockTodoRepository = { create: jest.fn(), findById: jest.fn(), findByUser: jest.fn(), update: jest.fn(), delete: jest.fn() };
    createTodo = new CreateTodo(mockTodoRepository);
  });

  it('should create a todo with valid title', async () => {
    const todoData = { id: '1', title: 'Test todo', completed: false, userId: 'user1' };
    mockTodoRepository.create.mockResolvedValue(todoData);
    const result = await createTodo.execute('Test todo', 'user1');
    expect(mockTodoRepository.create).toHaveBeenCalledWith({ title: 'Test todo', completed: false, userId: 'user1' });
    expect(result).toEqual(todoData);
  });

  it('should throw error for empty title', async () => {
    await expect(createTodo.execute('', 'user1')).rejects.toThrow('Title cannot be empty');
    await expect(createTodo.execute('   ', 'user1')).rejects.toThrow('Title cannot be empty');
  });
});`}
                    </Code>
                  </Box>
                </Box>

                <Divider />

                {/* DX */}
                <Box id="dx">
                  <Heading as="h2" size="xl" mb={4}>
                    Development Experience (DX) Improvements
                  </Heading>

                  <UnorderedList mb={4}>
                    <ListItem>
                      TypeScript strict mode to catch issues early.
                    </ListItem>
                    <ListItem>
                      ESLint + Prettier and EditorConfig for consistent
                      formatting.
                    </ListItem>
                    <ListItem>
                      Structured logging (pino) and health endpoints for
                      observability.
                    </ListItem>
                    <ListItem>
                      CI checks: type-check, lint, test on PRs to enforce
                      quality.
                    </ListItem>
                    <ListItem>
                      Local developer scripts (seed, reset, start) to reduce
                      onboarding friction.
                    </ListItem>
                  </UnorderedList>
                </Box>

                <Divider />

                {/* Migration */}
                <Box id="migration">
                  <Heading as="h2" size="xl" mb={4}>
                    Migration to More Advanced Patterns (When Needed)
                  </Heading>

                  <Text mb={3}>As systems grow, you may opt for:</Text>

                  <UnorderedList mb={4}>
                    <ListItem>
                      Dependency Injection container (Awilix, TypeDI) for more
                      structured wiring.
                    </ListItem>
                    <ListItem>
                      CQRS to separate read/write concerns for complex domains.
                    </ListItem>
                    <ListItem>
                      Event sourcing for an auditable sequence of changes.
                    </ListItem>
                    <ListItem>
                      Microservices to split bounded contexts when a monolith
                      becomes too large.
                    </ListItem>
                    <ListItem>
                      GraphQL as a complementary API for flexible client
                      queries.
                    </ListItem>
                  </UnorderedList>
                </Box>

                <Divider />

                {/* Conclusion */}
                <Box id="conclusion">
                  <Heading as="h2" size="xl" mb={4}>
                    Conclusion
                  </Heading>

                  <Text mb={4}>
                    Building applications with good architecture isn’t about
                    blindly following patterns — it’s about understanding the
                    principles behind them and applying them judiciously. The
                    Todo application examined here demonstrates how to:
                  </Text>

                  <UnorderedList mb={4}>
                    <ListItem>Separate concerns into distinct layers</ListItem>
                    <ListItem>
                      Apply dependency inversion to make code testable and
                      flexible
                    </ListItem>
                    <ListItem>
                      Use patterns like Repository and Use Case effectively
                    </ListItem>
                    <ListItem>Implement security best practices</ListItem>
                    <ListItem>
                      Create a maintainable and scalable codebase
                    </ListItem>
                  </UnorderedList>

                  <Heading as="h3" size="md" mb={2}>
                    Quick architecture checklist
                  </Heading>
                  <UnorderedList mb={4}>
                    <ListItem>
                      Can core business logic be tested without the DB?
                    </ListItem>
                    <ListItem>
                      Are controllers thin and free of domain rules?
                    </ListItem>
                    <ListItem>
                      Do repositories hide DB details behind an interface?
                    </ListItem>
                    <ListItem>
                      Are validation and auth enforced at the boundary?
                    </ListItem>
                    <ListItem>
                      Does the repo layout repeat the same pattern per feature?
                    </ListItem>
                  </UnorderedList>

                  <Text mb={4}>
                    Architecture should serve your application’s needs — start
                    with a simple structure and evolve it as requirements
                    change. Maintain clear boundaries and prefer abstractions
                    over concrete implementations to keep your codebase
                    adaptable and enjoyable to work with.
                  </Text>
                </Box>

                <Divider />

                {/* Resources */}
                <Box id="resources">
                  <Heading as="h2" size="xl" mb={4}>
                    Additional Resources
                  </Heading>

                  <UnorderedList mb={6}>
                    <ListItem>
                      <Link
                        href="https://www.patterns.dev/react/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="teal.400"
                      >
                        Patterns.dev — Modern React patterns and recommendations
                      </Link>
                    </ListItem>

                    <ListItem>
                      Node.js Design Patterns —
                      <Link
                        href="https://nodejsdesignpatterns.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="teal.400"
                        ml={1}
                      >
                        Official Site
                      </Link>
                      ,{" "}
                      <Link
                        href="https://github.com/PacktPublishing/Node.js-Design-Patterns-Third-Edition/tree/master?tab=readme-ov-file"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="teal.400"
                      >
                        nodejs design pattern GitHub Repo
                      </Link>
                    </ListItem>

                    <ListItem>
                      <Link
                        href="https://www.platformatichq.com/node-principles?utm_source=webdeveloper.beehiiv.com&utm_medium=newsletter&utm_campaign=tcp-explained-node-js-principles-media-player-styling-learning-vim&_bhlid=871a5e77783efb6c4d0de4f21d94cc13d322a521#radix-:RmkqH1:"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="teal.400"
                      >
                        Platformatic Node Principles — Practical Node.js best
                        practices
                      </Link>
                    </ListItem>
                    <ListItem>
                      Clean Architecture — Robert C. Martin’s original writing
                      on the subject.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </VStack>
            </Box>

            {/* Floating TOC / aside */}
            <Box
              as="aside"
              w="300px"
              pos="sticky"
              top="20px"
              display={{ base: "none", lg: "block" }}
              alignSelf="flex-start"
              borderRadius="md"
              p={4}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow="md"
            >
              <Heading as="h4" size="sm" mb={3}>
                On this page
              </Heading>
              <VStack align="start" spacing={1}>
                {headings.map((h) => (
                  <Link
                    key={h.id}
                    href={`#${h.id}`}
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      justifyContent="flex-start"
                      width="100%"
                    >
                      {h.label}
                    </Button>
                  </Link>
                ))}
              </VStack>

              <Divider my={4} />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
